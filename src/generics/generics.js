var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ophidian = (function () {
    function Ophidian() {
    }
    return Ophidian;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);
    }
    return Snake;
})(Ophidian);
var Viper = (function () {
    function Viper() {
    }
    Viper.prototype.snake = function () {
        return new Snake();
    };
    return Viper;
})();
var snake = new Viper().snake();
snake.name = "The King";
console.log(snake);
//# sourceMappingURL=generics.js.map