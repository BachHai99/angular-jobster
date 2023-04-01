import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { ListResponseModel } from './models/listResponseModel';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // apiUrl = "https://course-api.com/react-store-products";

  constructor(private httpClient:HttpClient) { }

  getproductsList():Observable<Product[]> {
    let apiUrl = "https://course-api.com/react-store-products";
    return this.httpClient.get<Product[]>(apiUrl)
  }
}
