var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Human;
})();
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Animal;
})();
var r = new Robot("R2-D2");
var r0 = new Animal("Donkey"); //how is this possible?
var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
var h = new Human("Tom");
console.log(h.eat());
//# sourceMappingURL=app.js.map