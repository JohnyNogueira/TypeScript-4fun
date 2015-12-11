var helloWorld = (function () {
    function helloWorld() {
    }
    helloWorld.main = function (msg) {
        return "hello " + msg;
    };
    return helloWorld;
})();
console.log(helloWorld.main("World"));
//# sourceMappingURL=helloworld.js.map