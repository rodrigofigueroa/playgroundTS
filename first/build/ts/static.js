"use strict";
var Gangsta = /** @class */ (function () {
    function Gangsta() {
    }
    Gangsta.prototype.shoot = function () {
        Gangsta.bulletsLeft--;
        console.log(Gangsta.bulletsLeft);
    };
    Gangsta.bulletsLeft = 100;
    return Gangsta;
}());
var gan = new Gangsta();
var gan2 = new Gangsta();
gan.shoot();
gan2.shoot();
// singleton
var AppState = /** @class */ (function () {
    function AppState() {
        this.counter = 0;
    }
    AppState.getInstance = function () {
        if (AppState.insReference === undefined) {
            AppState.insReference = new AppState();
        }
        return AppState.insReference;
    };
    return AppState;
}());
//const appstate = new AppState() // error
var appstate1 = AppState.getInstance();
var appstate2 = AppState.getInstance();
appstate1.counter++;
appstate2.counter++;
console.log(appstate1, appstate2);
