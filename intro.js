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
// Typed Object in TypeScript
/*
default typed object
update property
add new proprty
define a custom type for object
use ANY with object
*/
var user = {
    name: "shivam",
    age: 24,
    isMale: true
};
user.name = "Singh";
/*
user.name = 100  // its throw error because default data type for name is STRING
*/
console.log(user);
//  defind data types for object
var profile = {
    name: "string",
    age: 23,
    isMale: true,
    address: "MZP"
};
console.log(profile);
profile.address = 100; // it will not throww error because we use ANY  it meins we can use any data types
console.log(profile);
profile.address = false; // it will not throww error because we use ANY  it meins we can use any data types
console.log(profile);
//  with any key word we can update any key ka value in object
var anyUser = {
    name: "shivam",
    age: 24,
    isMale: true
};
anyUser.name = "King";
anyUser.name = 1000;
anyUser.name = true;
anyUser.age = "King";
anyUser.age = 1000;
anyUser.age = true;
console.log(anyUser);
//  Union Data Types in TyeScript
var name = "shivam";
/*
name = 30  // it throww error because data type for name in string
*/
// if we want to use any data type for any variable so we can use ANY keyWord like below
var isMale = true;
isMale = 30;
isMale = "No";
isMale = false;
console.log(isMale);
// other wise if we know the data types of that variable so we can use UNION like below
var value = 10;
console.log("value:", value);
value = "Shivam Ji";
console.log("value:", value);
value = true;
console.log("value:", value);
//  defind data types for object
var objUser = {
    name: "string",
    age: 20,
    isMale: true,
    address: "MZP",
    printName: function () {
        return "My Function";
    }
};
console.log(objUser);
console.log(objUser.printName());
// Function in TypeScript
/*
Define a normal function
Define function type
Add params in function
Define params type
Optional params with type
*/
function func() {
    return 10 + 10;
}
console.log(func());
function func2(a) {
    return a;
}
console.log(func2(100));
function func3(a, b) {
    return b ? a + b : a;
}
console.log(func3(100, 50));
//  Class in TypeScrippt
/*
Define a Class
Create a object for class
Make property
Make function
Define data type of functin and property
define data type to params
*/
var MyApp1 = /** @class */ (function () {
    function MyApp1() {
        this.name = "Shivam Singh";
        this.age = 24;
        this.msg = "Wellcome";
    }
    MyApp1.prototype.wellcomeMsg = function () {
        console.log(this.msg, this.name);
    };
    return MyApp1;
}());
var showMsg = new MyApp1();
showMsg.wellcomeMsg();
var MyApp2 = /** @class */ (function () {
    function MyApp2() {
        this.name = "Shivam Singh 2";
        this.age = 24;
        this.msg = "Wellcome 2";
        console.log("My Name");
    }
    MyApp2.prototype.wellcomeMsg = function () {
        console.log(this.msg, this.name);
    };
    return MyApp2;
}());
var showMsg2 = new MyApp2();
showMsg2.wellcomeMsg();
var MyApp3 = /** @class */ (function () {
    function MyApp3(nameValue) {
        this.age = 24;
        this.msg = "Wellcome3";
        this.name = nameValue;
    }
    MyApp3.prototype.wellcomeMsg = function () {
        console.log(this.msg, this.name);
    };
    MyApp3.prototype.showAge = function () {
        return this.age;
    };
    return MyApp3;
}());
var showMsg3 = new MyApp3("Saurabh Singh");
showMsg3.wellcomeMsg();
console.log(showMsg3.showAge());
