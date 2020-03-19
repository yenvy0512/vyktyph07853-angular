import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  addProduct(){
    console.log('Component' + this.product);
    this.productService.addProduct(this.product);
  }
}