var SuperHeros;
(function (SuperHeros) {
    SuperHeros[SuperHeros["Spider"] = 0] = "Spider";
    SuperHeros[SuperHeros["Batman"] = 1] = "Batman";
    SuperHeros[SuperHeros["SuperMan"] = 2] = "SuperMan";
})(SuperHeros || (SuperHeros = {}));
;
var c = SuperHeros.Batman;
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 1] = "Apple";
    Fruits[Fruits["Banana"] = 2] = "Banana";
    Fruits[Fruits["Orange"] = 3] = "Orange";
})(Fruits || (Fruits = {}));
;
var fruitName = Fruits[2];
console.log(fruitName);
var social;
(function (social) {
    social[social["facebook"] = 1] = "facebook";
    social[social["github"] = 2] = "github";
    social[social["twitter"] = 4] = "twitter";
})(social || (social = {}));
; //manual assign
var valueOfSocialEnum = social["github"];
console.log(valueOfSocialEnum);
var EnumObjs = (function () {
    function EnumObjs() {
    }
    EnumObjs.One = { value: "One", id: 1 };
    EnumObjs.Two = { value: "Two", id: 2 };
    EnumObjs.Tree = { value: "Tree", id: 3 };
    return EnumObjs;
})();
console.log(EnumObjs.One.value);
//# sourceMappingURL=enum.js.map