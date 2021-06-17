"use strict";
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getAllProducts = function () {
        return [];
    };
    ProductService.prototype.getProductId = function () {
        return { nameProduct: '', idProduct: 2 };
    };
    return ProductService;
}());
var ProductServiceMock = /** @class */ (function () {
    function ProductServiceMock() {
    }
    ProductServiceMock.prototype.getAllProducts = function () {
        return [];
    };
    ProductServiceMock.prototype.getProductId = function () {
        return { nameProduct: '', idProduct: 4 };
    };
    return ProductServiceMock;
}());
var checkProduction = function (prod) {
    if (prod) {
        return new ProductService();
    }
    else {
        return new ProductServiceMock();
    }
};
var production = true;
var service = checkProduction(production);
console.log(service.getProductId(1));
