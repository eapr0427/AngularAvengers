import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminAvengerComponent } from './admin-avenger/admin-avenger.component';
import { FormsModule } from '@angular/forms';
import { AdminPoderComponent } from './admin-poder/admin-poder.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminAvengerComponent,
    AdminPoderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       // path:'about', component:AboutComponent},
        {path:'adminAvenger', component:AdminAvengerComponent},
        {path:'adminPoder' , component:AdminPoderComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
