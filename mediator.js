const User = function (name) {
    this.name = name;
    this.chat = null;
};

User.prototype.send = function (message, to) {
    if (!(this.chat instanceof ChatRoom)) {
        throw new Error("Please join to some chat to send message");
    }

    this.chat.send(message, this, to);
};

User.prototype.receive = function (message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
};

// mediator is main  module to control all submodules
const ChatRoom = function () {
    const users = {};

    this.register = function (user) {
        if (!(user instanceof User)) {
            throw new Error("User has to be instance of User");
        }
        users[user.name] = user;
        user.chat = this;
    };


    this.send = function (message, from, to) {
        if (to) {
            if (!(to instanceof User)) {
                throw new Error("To has to be instance of User");
            }

            to.receive(message, from);
        } else {
            for (let user in users) {
                if (users[user] !== from) {
                    users[user].receive(message, from);
                }
            }
        }
    };
};

const sarra = new User("Sarra");
const john = new User("John");
const sergey = new User("Sergey");

const newYorkFriends = new ChatRoom();
newYorkFriends.register(sarra);
newYorkFriends.register(john);
newYorkFriends.register(sergey);

sarra.send("Hello from Sarra to all");
john.send("Hello from John to all");
sergey.send("Hello from Sergey to John", john);
sarra.send("Hello from Sarra to Sergey", sergey);