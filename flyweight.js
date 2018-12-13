const Car = function (make, model, trim, year, engineDetails, transmissionDetails) {
    this.make = make;
    this.model = model;
    this.trim = trim;
    this.year = year;
    this.engineDetails = engineDetails;
    this.transmissionDetails = transmissionDetails;
};

const CarFactory = function () {
    const cars = [];

    return {
        getCar: function (make, model, trim, year, engineDetails, transmissionDetails) {
            const carIndex = make.concat(model).concat(trim).concat(year);

            if (cars[carIndex] === undefined) {
                cars[carIndex] = new Car(make, model, trim, year, engineDetails, transmissionDetails);
            }

            return cars[carIndex];
        },

        getAllCars: function () {
            return cars;
        }
    }
};

const carCollection = new CarFactory();

const audiA6 = carCollection.getCar("Audi", "A6", "testTrim", "2010",
    {id: "audiEngineId"}, {id: "audiTransmissionId"});

const fordFocus2010 = carCollection.getCar("Ford", "Focus", "testFordTrim", "2010",
    {id: "fordEngineId"}, {id: "fordTransmissionId"});

const fordFocus2010_2 = carCollection.getCar("Ford", "Focus", "testFordTrim", "2010",
    {id: "fordEngineId"}, {id: "fordTransmissionId"});

const fordFocus2015 = carCollection.getCar("Ford", "Focus", "testFordTrim", "2015",
    {id: "fordEngineId"}, {id: "fordTransmissionId"});


console.log(carCollection.getAllCars());