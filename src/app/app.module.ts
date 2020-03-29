import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryComponent } from './category/category.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from 
'./product-detail/product-detail.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewService } from './new.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,HttpClientModule,NgbModule],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, ProductAddComponent, CategoryComponent, SliderComponent, HomeComponent, ProductDetailComponent, NewListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, NewService]
})
export class AppModule { }
