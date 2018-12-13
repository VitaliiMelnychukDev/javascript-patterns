const Soldier = function () {
    this.getStrength = function () {
        return 4;
    }
};

const Tank = function () {
    this.getStrength = function () {
        return 20;
    }
};

const Army = function () {
    const units = [];

    this.addUnit = function (unit) {
        units.push(unit);
    };

    this.getStrength = function () {
        let strength = 0;
        for (let unit of units) {
            strength += unit.getStrength();
        }

        return strength;
    }
};

const army = new Army();
army.addUnit(new Soldier());
army.addUnit(new Soldier());
army.addUnit(new Tank());
console.log(army.getStrength());

army.addUnit(new Soldier());
console.log(army.getStrength());