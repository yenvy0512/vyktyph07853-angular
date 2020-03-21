import { Injectable } from '@angular/core';
import { data } from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }
getProducts(){
    return this.products;
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProduct(id){
    return this.products.filter(product => product.id !== id);
  }
  addProduct(product){
    const newProduct = { id: 10, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }
}