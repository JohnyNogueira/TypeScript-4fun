interface IDog{
	name: string;
	breed?: string;
	age: number; 
		
}

class Dog implements IDog {
	
	hisName: string;
	
	constructor (public name: string, public age: number) {
		this.hisName = name;
	}
	
	getName() {
		return "His name is : " + this.hisName;
	}
} 

var dog = new Dog("John Cena" , 2); 
 
console.log(dog.getName());
//HIS NAME IS JOHN CENA
