import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ProductRoutingModule } from './product.routing';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.services';
@NgModule({
  declarations: [
    AddProductsComponent, 
    EditProductsComponent, 
    ListProductsComponent, 
    SearchProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
