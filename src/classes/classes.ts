class Animal {
    constructor(public name:string) { }
    giveMilk(l) {
        console.log(this.name + " gave " + l + " liters of milk");
    }
}

class Cow extends Animal { 
}

var marta = new Cow("Marta");
var annie: Animal = new Cow("Annie")

marta.giveMilk(4);
annie.giveMilk(34);