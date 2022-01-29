var Bug = /** @class */ (function () {
    function Bug() {
    }
    Bug.prototype.findBugg = function (bug) {
        console.log("Finding this " + bug + " on my program!");
    };
    return Bug;
}());
var bug = new Bug();
console.log(bug.findBugg('Spider'));
//# sourceMappingURL=debugg.js.map