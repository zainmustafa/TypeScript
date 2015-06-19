class Human {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Robot {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}
let r: Robot = new Robot("R2-D2");
let r0: Robot = new Animal("Donkey");//how is this possible?

var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results
let h: Human = new Human("Tom");
console.log(h.eat());
