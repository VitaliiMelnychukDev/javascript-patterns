const BLACK_WHITE_PHOTO = "blackWhite";
const COLOR_PHOTO = "color";

function Factory() {
    this.getPrinter = function (photoType) {
        let printer = null;
        if (photoType === BLACK_WHITE_PHOTO) {
            printer = new BLACK_WHITE_PRINTER();
        } else if (photoType === COLOR_PHOTO) {
            printer = new COLOR_PRINTER();
        } else {
            throw new Error("We can't print this photo");
        }

        return printer;
    };
}

const COLOR_PRINTER = function () {
    this.price = 10;
};

const BLACK_WHITE_PRINTER = function () {
    this.price = 4;
};

const factory = new Factory();

const printerForColorPhoto = factory.getPrinter(COLOR_PHOTO);
console.log(printerForColorPhoto);

const printerForBlackWhitePhoto = factory.getPrinter(BLACK_WHITE_PHOTO);
console.log(printerForBlackWhitePhoto);