const Event = function () {
    const subscribers = [];

    return {
        publish: function (params) {
            for (let i in subscribers) {
                subscribers[i].func.call(subscribers[i].context, params);
            }
        },
        subscribe: function (func, context) {
            const ctx = context || null;
            subscribers.push({
                func: func,
                context: ctx
            });
        },
        unsubscribe: function (func, context) {
            for (let i in subscribers) {
                if (subscribers[i].func === func &&
                    subscribers[i].context === context) {

                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

const appleShop = new Event();

const user1 = {
    name: 'Frodo',
    func: function (message) {
        console.log(this.name + ": New message: " + message);
    }
};
appleShop.subscribe(user1.func, user1);
appleShop.publish("30% discount on iphone7");

const user2 = {
    name: 'Bilbo',
    func: function (message) {
        console.log(this.name + ": Got a message: " + message);
    }
};
appleShop.subscribe(user2.func, user2);
appleShop.publish("50% discount on iphone6");

appleShop.unsubscribe(user2.func, user2);
appleShop.publish("Iphone8 is coming in next month!");