let Singleton = (function () {
    let instance;

    function Init() {
        let settings = {};
        this.setSetting = function (name, value) {
            settings[name] = value;
        };

        this.getSetting = function (name) {
            if (settings[name] === undefined) {
                throw new Error("Option " + name + " does not exist");
            }

            return settings[name];
        };
    }

    return {
        getInstance: function () {
            if (instance === undefined) {
                instance = new Init();
            }

            return instance;
        }
    }
})();

let settings = Singleton.getInstance();
settings.setSetting('dbEngine', 'MySQL');
console.log(settings.getSetting('dbEngine'));

let settings2 = Singleton.getInstance();
console.log(settings2.getSetting('dbEngine'));
console.log(settings2.getSetting('notExistOption'));