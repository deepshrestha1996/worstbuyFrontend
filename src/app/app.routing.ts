import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRouting: Routes = [

    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full"
    },
    {
        path:"auth",
        loadChildren: "./auth/auth.module#AuthModule", //lazy loading
    },
    {
        path: "user",
        loadChildren:"./users/users.module#UsersModule", // lazy loading
    },
    {
        path: "product",
        loadChildren:"./products/products.module#ProductsModule", // lazy loading
    },
    // {
    //     path:"users",
    //     loadChildren: "./auth/auth.module#AuthModule", //lazy loading
    // },
    {
        path: "**",
        component: PageNotFoundComponent,
    }

]


@NgModule({

    imports: [RouterModule.forRoot(appRouting)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}