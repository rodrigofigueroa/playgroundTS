"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailed = exports.SearchSuccsess = exports.Search = void 0;
var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.classType = 'SEARCH';
    }
    return Search;
}());
exports.Search = Search;
var SearchSuccsess = /** @class */ (function () {
    function SearchSuccsess(payload) {
        this.payload = payload;
        this.classType = 'SEARCH_SUCCESS';
    }
    return SearchSuccsess;
}());
exports.SearchSuccsess = SearchSuccsess;
var SearchFailed = /** @class */ (function () {
    function SearchFailed() {
        this.classType = 'SEARCH_FAILED';
    }
    return SearchFailed;
}());
exports.SearchFailed = SearchFailed;
function area(figure) {
    switch (figure.kind) {
        case 'triangle':
            return (figure.height * figure.width) / 2;
        case 'circle':
            return Math.PI * (Math.pow(figure.width, 2));
    }
}
var myTriangle = { kind: 'triangle', height: 50, width: 20 };
var myCircle = { kind: 'circle', width: 20 };
console.log(area(myTriangle));
console.log(area(myCircle));
