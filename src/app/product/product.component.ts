import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('data') product : Product;
  constructor() { }

  ngOnInit() {
  }

}