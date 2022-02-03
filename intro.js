"use strict";
exports.__esModule = true;
/*
    Normal Comands in TypeScript-
    tsc -v  for checking Type Script Version
    tsc <file name>   for run typescript file
    tsc <file name> --watch for countinu watching files
*/
// Intro of typescript
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
// ARRAY in TypeScript
var strArr = ["shivam", "Singh", "number"]; // default data type STRING because all eliment is STRING type
strArr.push("name");
/*
strArr.push(10); // throw error because all eliment is STRING type
*/
console.log(strArr);
var strArrDataType = ["shivam", "Singh", "number"];
console.log("strArrDataType:", strArrDataType);
var numArr = [2, 3, 5]; // default data type NUMBER because all eliment is NUMBER type
numArr.push(7);
/*
numArr.push("str"); // throw error because all eliment is NUMBER type
*/
console.log(numArr);
var numArrDataTye = [2, 3, 5];
console.log("numArrDataTye:", numArrDataTye);
var mixTypeArr = [4, 5, "name", "num", true, false, 2.2]; // in this ARRAY all types of data avalable so that it will not throw error
mixTypeArr.push(100);
mixTypeArr.push("string value");
mixTypeArr.push(true);
console.log(mixTypeArr);
var boolDataType = [true, false];
console.log("boolDataType:", boolDataType);
