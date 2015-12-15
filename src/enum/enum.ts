enum SuperHeros { Spider , Batman , SuperMan }; 
var c: SuperHeros = SuperHeros.Batman;

enum Fruits { Apple = 1, Banana, Orange };
var fruitName: string = Fruits[2];

console.log(fruitName);

enum social { facebook = 1, github = 2, twitter = 4 };//manual assign
var valueOfSocialEnum = social["github"];
console.log(valueOfSocialEnum);
 
 
class EnumObjs{
    public static One = { value : "One" , id : 1 };
    public static Two = { value : "Two" , id : 2 };
    public static Tree = { value : "Tree" , id : 3 }; 
}

console.log(EnumObjs.One.value);