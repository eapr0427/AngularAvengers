import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminAvengerComponent } from './admin-avenger/admin-avenger.component';
import { FormsModule } from '@angular/forms';
import { AdminPoderComponent } from './admin-poder/admin-poder.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AdminAvengerComponent,
                AdminPoderComponent
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot([
                    // path:'about', component:AboutComponent},
                    { path: 'adminAvenger', component: AdminAvengerComponent },
                    { path: 'adminPoder', component: AdminPoderComponent }
                ]),
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map