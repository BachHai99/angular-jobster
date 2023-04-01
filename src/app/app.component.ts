import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service'
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-jobster';
  productsList:Product[] = []

  constructor(
    private heroService:HeroService,
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProductsList();
  }

  getProductsList() {
    this.heroService.getproductsList().subscribe((response) => {
      console.log(response);
      this.productsList = response
    })
  }
}
