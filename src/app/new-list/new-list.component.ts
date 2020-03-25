import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';
import { Product } from '../Product';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  // selected: Product;
  products: Product[];


  constructor(
    private newService: NewService
  ) {
    console.log('constructor')
   }

  ngOnInit():void {
    this.getProducts();
  }
  getProducts(){
   this.newService.getProducts().subscribe(data => {
     console.log(data)
     this.products = data;
    });
  }

}
// import { Component, OnInit } from '@angular/core';
// import { NewService } from '../new.service';
// import { Product } from '../Product';
// import {productDemo} from '../product1';

// @Component({
//   selector: 'app-new-list',
//   templateUrl: './new-list.component.html',
//   styleUrls: ['./new-list.component.css']
// })
// export class NewListComponent implements OnInit {
//   selected: Product;
//   products: productDemo[];

//   constructor(
//     private newService: NewService
//   ) {
//     console.log('constructor')
//    }

//   ngOnInit():void {
//     this.getProducts();
//   }
//   getProducts(){
//    this.newService.getProducts().subscribe(data => {
//      console.log(data)
//      this.products = data;
//     });
//   }

// }