const User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.printInfo = function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

const DecoratedUser = function (firstName, lastName, permissions) {
    User.call(this, firstName, lastName);

    this.permissions = permissions;

    this.printPermissions = function () {
        console.log(this.permissions);
    }
};

const SuperUser = function (firstName, lastName) {
    DecoratedUser.call(this, firstName, lastName, ["modifyUsers"]);
};
SuperUser.prototype = Object.create(User.prototype);

const userJohn = new SuperUser("John", "Kain");
userJohn.printInfo();
userJohn.printPermissions();
console.log(userJohn);