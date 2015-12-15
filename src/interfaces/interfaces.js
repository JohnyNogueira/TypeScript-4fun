var Dog = (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
        this.hisName = name;
    }
    Dog.prototype.getName = function () {
        return "His name is : " + this.hisName;
    };
    return Dog;
})();
var dog = new Dog("John Cena", 2);
console.log(dog.getName());
//HIS NAME IS JOHN CENA
//# sourceMappingURL=interfaces.js.map