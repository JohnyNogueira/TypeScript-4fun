var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.giveMilk = function (l) {
        console.log(this.name + " gave " + l + " liters of milk");
    };
    return Animal;
})();
var Cow = (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        _super.apply(this, arguments);
    }
    return Cow;
})(Animal);
var marta = new Cow("Marta");
var annie = new Cow("Annie");
marta.giveMilk(4);
annie.giveMilk(34);
//# sourceMappingURL=classes.js.map