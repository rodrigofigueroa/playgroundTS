var FindBug = /** @class */ (function () {
    function FindBug() {
    }
    FindBug.prototype.findBugg = function (bug) {
        console.log("Finding this " + bug + " on my program!");
    };
    return FindBug;
}());
var bugs = new FindBug();
console.log(bugs.findBugg('Spider'));
//# sourceMappingURL=debugg.js.map