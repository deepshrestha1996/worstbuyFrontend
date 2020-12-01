import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ToastrModule } from "ngx-toastr"

//routing configuration

import { AppRoutingModule } from "./app.routing"
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
/*summarization
routing:
routung module
routing config
routing-outlet directive to use as sofa set
routerlink is used for navigation
*/

@NgModule({   // decorator
  declarations: [  //// properties of metadata
    AppComponent,

    // component /pipes/directives are placed in declaration block
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UsersModule //module haru yesmaa


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
/// es6 syntax for import and export

// import syntax
// import {} from "source"
// export syntax
//




// module is a class
// angular require atleast one module which will act as root module to \
//  launch its application


//angular require atleast one module and one component to launch its
// application


//glossary
// module
//component
// pipes
// directives
// services
// all these above mentioned termed are class in angular


// selector
// meta data
// decorator
 selector is an term which acts as an html element that
carries overall component
Selectors always comes in component

// decorator
a decorator is a function which defines class using metadata
a decorator always comes in @prefix

// meta-data
meta data is an object which is used to define class
properties in meta data are defined by decorator


// meta data properties of module
// decleration //
declaration holds component, pipes , directives of the application

// imports
// jahile pani imports vitra module matra aauxa
/// modules can be:
1. inbuilt Module(angular sanga vayeko)
2. thirdparty module (npm js ma vayeko module)
3. user defined module


// providers//
// this segment holds services
// bootstrap
// there will be a root component for a application which is placed at bootstrab section


// exports all the exported content (component/ module)
// entryComponents // model ma aune component haru entry component(they should be delcaration as well)

*/
