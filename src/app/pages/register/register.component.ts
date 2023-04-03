import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/register';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import {
  showLoading,
  hideLoading,
} from 'src/app/stores/allJobs/all-jobs.action';
import { IAllJobs } from 'src/app/stores/allJobs/all-jobs.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  values: Register = {
    name: '',
    email: '',
    password: '',
    isMember: false,
  };

  registerForm: FormGroup;

  // count$: Observable<number>;

  // public isLoading$: Observable<IAllJobs>

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    // private toasterService: ToastrService,
    private router: Router
  ) {
    // this.count$ = store.select('count');
    // this.isLoading$ = store.select('allJobs')
  }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm() {
    this.registerForm = formBuilder.group({
      name: ['', Validators.required],
    });
  }

  // showLoading() {
  //   this.store.dispatch(showLoading());
  // }

  // hideLoading() {
  //   this.store.dispatch(hideLoading());
  // }

  // increment() {
  //   this.store.dispatch(incremnet())
  // }
  // decrement() {
  //   this.store.dispatch(decremnet())
  // }
  // reset() {
  //   this.store.dispatch(reset())
  // }
}
