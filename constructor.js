function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = function () {
    console.log("Name: " + this.name + "; Age: " + this.age);
};

const taras = new Person("Taras", 19);
taras.printInfo();