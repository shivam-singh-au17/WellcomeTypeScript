export {};

/*
    Normal Comands in TypeScript-
    tsc -v  for checking Type Script Version
    tsc <file name>   for run typescript file
    tsc <file name> --watch for countinu watching files
*/

// Intro of typescript and run First Code

let str = "Shivam Singh";
console.log("str:", str);
console.warn("str:", str);

class App {
  test() {
    console.log("Working Fine");
  }
}

let fun = new App();
fun.test();

// Types in TypeScript

let num1: number = 10;
console.log(num1);

var num2: number = 10.1;
console.log(num2);

let str1: string = "Shivam";
console.log(str1);

const isFine: boolean = true;
console.log(isFine);

// ARRAY in TypeScript

let strArr = ["shivam", "Singh", "number"]; // default data type STRING because all eliment is STRING type
strArr.push("name");
/*
strArr.push(10); // throw error because all eliment is STRING type
*/
console.log(strArr);
let strArrDataType: string[] = ["shivam", "Singh", "number"];
console.log("strArrDataType:", strArrDataType);

let numArr = [2, 3, 5]; // default data type NUMBER because all eliment is NUMBER type
numArr.push(7);
/*
numArr.push("str"); // throw error because all eliment is NUMBER type
*/
console.log(numArr);
let numArrDataTye: number[] = [2, 3, 5];
console.log("numArrDataTye:", numArrDataTye);

let mixTypeArr = [4, 5, "name", "num", true, false, 2.2]; // in this ARRAY all types of data avalable so that it will not throw error
mixTypeArr.push(100);
mixTypeArr.push("string value");
mixTypeArr.push(true);
console.log(mixTypeArr);

let boolDataType: boolean[] = [true, false];
console.log("boolDataType:", boolDataType);

// Typed Object in TypeScript

/*
default typed object
update property
add new proprty
define a custom type for object
use ANY with object
*/

const user = {
  name: "shivam", // default data type for name is STRING
  age: 24, // default data type for age is Number
  isMale: true, // default data type for isMale is BOOLEAN
};
user.name = "Singh";
/*
user.name = 100  // its throw error because default data type for name is STRING
*/
console.log(user);

interface profileDataTypes {
  name: string;
  age: number;
  isMale: boolean;
  address: any;
}

//  defind data types for object

let profile: profileDataTypes = {
  name: "string",
  age: 23,
  isMale: true,
  address: "MZP",
};

console.log(profile);
profile.address = 100; // it will not throww error because we use ANY  it meins we can use any data types
console.log(profile);
profile.address = false; // it will not throww error because we use ANY  it meins we can use any data types
console.log(profile);

//  with any key word we can update any key ka value in object

const anyUser: any = {
  name: "shivam", // default data type for name is any Data Type
  age: 24, // default data type for age is any Data Type
  isMale: true, // default data type for isMale is any Data Type
};

anyUser.name = "King";
anyUser.name = 1000;
anyUser.name = true;
anyUser.age = "King";
anyUser.age = 1000;
anyUser.age = true;
console.log(anyUser);

//  Union Data Types in TyeScript

let name: string = "shivam";

/*
name = 30  // it throww error because data type for name in string
*/

// if we want to use any data type for any variable so we can use ANY keyWord like below

let isMale: any = true;
isMale = 30;
isMale = "No";
isMale = false;
console.log(isMale);

// other wise if we know the data types of that variable so we can use UNION like below

let value: string | number | boolean = 10;
console.log("value:", value);
value = "Shivam Ji";
console.log("value:", value);
value = true;
console.log("value:", value);

// Interface in TypeScript

/*
Syntax:
  interface interfaceName 
    {
      property_Type : dataType;
      property_Type : dataType;
      property_Type : dataType;
    }
*/

interface objUserDataTypes {
  name: string;
  age: number;
  isMale: boolean;
  address: any;
  printName: () => string;
}

//  defind data types for object

let objUser: objUserDataTypes = {
  name: "string",
  age: 20,
  isMale: true,
  address: "MZP",
  printName: function () {
    return "My Function";
  },
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

function func(): number {
  return 10 + 10;
}

console.log(func());

function func2(a: number): number {
  return a;
}

console.log(func2(100));

function func3(a: number, b?: number): number {
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

class MyApp1 {
  name = "Shivam Singh";
  age = 24;
  msg = "Wellcome";
  wellcomeMsg() {
    console.log(this.msg, this.name);
  }
}

let showMsg = new MyApp1();
showMsg.wellcomeMsg();

class MyApp2 {
  name = "Shivam Singh 2";
  age = 24;
  msg = "Wellcome 2";
  constructor() {
    console.log("My Name");
  }
  wellcomeMsg() {
    console.log(this.msg, this.name);
  }
}

let showMsg2 = new MyApp2();
showMsg2.wellcomeMsg();

class MyApp3 {
  name;
  age: number = 24;
  msg = "Wellcome3";
  constructor(nameValue: string) {
    this.name = nameValue;
  }
  wellcomeMsg(): void {
    console.log(this.msg, this.name);
  }
  showAge(): number {
    return this.age;
  }
}

let showMsg3 = new MyApp3("Saurabh Singh");
showMsg3.wellcomeMsg();
console.log(showMsg3.showAge());

//  Inheritance in TypeScript

/*
what is inheriitance
make a parent class
make a child class
*/

class Parent {
  name: string;
  setName(name): void {
    this.name = name;
  }
}
class Child extends Parent {
  getName(): string {
    return this.name;
  }
}

let printName = new Child();
printName.setName("Sonam Singh");
console.log(printName.getName());

//  Enum in TypeScript

enum Days {
  mon,
  tue,
  wed,
  fri,
  sat,
  sun,
}

let whichDay: Days;

// whichDay = "test"; // throe error

whichDay = Days.fri;
console.log(whichDay);
whichDay = Days.sun;
console.log(whichDay);
whichDay = Days.tue;
console.log(whichDay);

enum DaysTwo {
  mon = "Monday",
  tue = "Thuesday",
}

let whichDayTwo: DaysTwo;

whichDayTwo = DaysTwo.mon;
console.log(whichDayTwo);
console.log(whichDayTwo === "Monday");
whichDayTwo = DaysTwo.tue;
console.log(whichDayTwo);
console.log(whichDayTwo === "Thuesday");

enum Value {
  a = 22,
  b = 44,
  c = 66,
  d = 88,
  e,
  f,
}

function printValue(data: Value) {
  return data;
}

console.log(Value.a);
console.log(Value.c);
console.log(Value.f);

//  Symbol in TypeScript

/*


let mySymbol1 = Symbol("1")
let mySymbol2 = Symbol("2")
console.log('mySymbol:', mySymbol1 == mySymbol2)
console.log('mySymbol:', mySymbol1 === mySymbol2)

let data = {
  [mySymbol1] : "Mr. Shivam Siingh"
}

console.warn(data[mySymbol1]);

let funcDemo = Symbol("3";
class Demo {
  [funcDemo]() {
    return "My Demo"
  }
}

let shoeDemo = new Demo();
console.log(shoeDemo[funcDemo]());


*/
