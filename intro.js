"use strict";
exports.__esModule = true;
/*
    Normal Comands in TypeScript-
    tsc -v  for checking Type Script Version
    tsc <file name>   for run typescript file
    tsc <file name> --watch for countinu watching files
*/
// Intro of typescript and run First Code
var str = "Shivam Singh";
console.log("str:", str);
console.warn("str:", str);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Working Fine");
    };
    return App;
}());
var fun = new App();
fun.test();
// Types in TypeScript
var num1 = 10;
console.log(num1);
var num2 = 10.1;
console.log(num2);
var str1 = "Shivam";
console.log(str1);
var isFine = true;
console.log(isFine);
