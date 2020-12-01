import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const userRoute: Routes=[
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"profile",
        component: ProfileComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(userRoute)],
    exports: [RouterModule],
})

export class UserRoutingModule{

}