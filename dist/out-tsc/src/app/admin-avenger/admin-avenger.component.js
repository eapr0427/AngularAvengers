import * as tslib_1 from "tslib";
import { Personaje } from './../../models/Personaje';
import { Component } from '@angular/core';
import { Poder } from 'src/models/Poder';
var AdminAvengerComponent = /** @class */ (function () {
    function AdminAvengerComponent() {
        //this.ObtenerLocalStorage();
        this.lPoder = [];
    }
    AdminAvengerComponent.prototype.ngOnInit = function () {
        this.ObtenerLocalStorage();
        // this.lPoder.push(new Poder("Volar"));
        //this.lPoder.push(new Poder("Fuerza"));
        //console.log(this.lPoder);
    };
    AdminAvengerComponent.prototype.ObtenerLocalStorage = function () {
        var _this = this;
        var poderes = JSON.parse(localStorage.getItem("poder"));
        poderes.forEach(function (x) {
            console.log(x);
            _this.lPoder.push(new Poder(x.nombre));
        });
    };
    AdminAvengerComponent.prototype.GuardarVengador = function (nombre) {
        this.Vengador = new Personaje(nombre, this.lPoder);
        console.log(this.Vengador);
    };
    AdminAvengerComponent.prototype.selectchange = function ($event) {
        console.log($event, $event.target, $event.currentTarget);
    };
    AdminAvengerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-avenger',
            templateUrl: './admin-avenger.component.html',
            styleUrls: ['./admin-avenger.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AdminAvengerComponent);
    return AdminAvengerComponent;
}());
export { AdminAvengerComponent };
//# sourceMappingURL=admin-avenger.component.js.map