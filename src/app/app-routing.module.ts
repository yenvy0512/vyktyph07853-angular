import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'add-product', component: ProductAddComponent},
  {path: 'list-product',component: ProductListComponent},
   {path: 'home',component: HomeComponent},
    {path: 'new-list', component: NewListComponent},
     {path: 'product/:id', component: ProductDetailComponent},


  // {path: '**', component: NotFoundComponent},
//   {path: '',redirectTo:'home',pathMatch:'full'},
    {path: 'product',component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
