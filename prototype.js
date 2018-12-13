const Car = function (make, model) {
    this.make = make;
    this.model = model;
};

Car.prototype.printInfo = function () {
    console.log("Car make: " + this.make + "; Car model: " + this.model + ".");
};

const audiA8 = new Car("Audi", "A8");
audiA8.printInfo();