import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Poder } from 'src/models/Poder';
var AdminPoderComponent = /** @class */ (function () {
    function AdminPoderComponent() {
        this.lPoder = [];
    }
    AdminPoderComponent.prototype.ngOnInit = function () {
    };
    AdminPoderComponent.prototype.GuardarPoder = function (nombre) {
        this.lPoder.push(new Poder(nombre));
        this.GrabarLocalStorage();
    };
    AdminPoderComponent.prototype.GrabarLocalStorage = function () {
        var poderes = JSON.parse(localStorage.getItem("poder"));
        this.lPoder.push(poderes);
        //poderes.push(new Poder(nombre));
        console.log(this.lPoder);
        localStorage.setItem("poder", JSON.stringify(this.lPoder));
    };
    AdminPoderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-poder',
            templateUrl: './admin-poder.component.html',
            styleUrls: ['./admin-poder.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AdminPoderComponent);
    return AdminPoderComponent;
}());
export { AdminPoderComponent };
//# sourceMappingURL=admin-poder.component.js.map