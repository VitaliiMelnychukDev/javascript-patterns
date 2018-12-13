const PURPOSE_GAME = 'game';
const PURPOSE_WORK = 'work';
const PURPOSE_MUSIC = 'music';

const RAM = function (memory) {
    this.memory = memory;
};

const Processor = function (countCores, speed) {
    this.countCores = countCores;
    this.speed = speed
};

const VideoCard = function (memory) {
    this.memory = memory;
};

const Laptop = function (processor, RAM, videoCard) {
    this.processor = processor;
    this.RAM = RAM;
    this.videoCard = videoCard;
};

const BuyLaptop = function (purpose) {
    this.purpose = purpose;
};

BuyLaptop.prototype.getLaptop = function () {

    let processor = null;
    let ram = null;
    let videoCard = null;
    if (this.purpose === PURPOSE_WORK) {
        processor = new Processor(2, 3);
        ram = new RAM(8);
        videoCard = new VideoCard(1);
    } else if (this.purpose === PURPOSE_GAME) {
        processor = new Processor(4, 3);
        ram = new RAM(8);
        videoCard = new VideoCard(4);
    } else {
        throw "Laptop for " + this.purpose + " purpose does not exist.";
    }

    return new Laptop(processor, ram, videoCard);
};

const wantToBuyGameLaptop = new BuyLaptop(PURPOSE_GAME);
const gameLaptop = wantToBuyGameLaptop.getLaptop();
console.log(gameLaptop);

const wantToBuyWorkLaptop = new BuyLaptop(PURPOSE_WORK);
const workLaptop = wantToBuyWorkLaptop.getLaptop();
console.log(workLaptop);

const wantToBuyMusicLaptop = new BuyLaptop(PURPOSE_MUSIC);
const musicLaptop = wantToBuyMusicLaptop.getLaptop();
console.log(musicLaptop);