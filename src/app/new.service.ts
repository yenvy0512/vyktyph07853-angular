import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
// import {productDemo} from './product1';

@Injectable()
export class NewService {
  api = 'http://5e78b369491e9700162de4df.mockapi.io/api/product';
  products = data;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProduct(id){
    return this.products.filter(product => product.id !== id);
  }
  // this.httpClient.put(this.url + endPoints, postData).subscribe(data => {
  //   console.log(data);
  // });
  addProduct(product){
    const newProduct = { id: 10, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }

}