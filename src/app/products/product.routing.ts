import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { SearchProductsComponent } from './search-products/search-products.component';
const productRoutes: Routes = [
    {
        path: "add",
        component: AddProductsComponent
    },
    {
        path: "list",
        component: ListProductsComponent
    },
    {
        path:"edit/:id",
        component: EditProductsComponent
    },{
        path:"search",
        component: SearchProductsComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {

}