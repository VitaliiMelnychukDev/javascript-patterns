const uniqueId = (function () {
    let id = 0;

    const privateMethod = function () {
        console.log("Private Method");
    };

    return {
        getId: function () {
            return id++;
        },
        publicMethod: function () {
            privateMethod();
        }
    }
})();

console.log(uniqueId.getId());
console.log(uniqueId.getId());
uniqueId.publicMethod();