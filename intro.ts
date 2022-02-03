export {};

/*
    Normal Comands in TypeScript-
    tsc -v  for checking Type Script Version
    tsc <file name>   for run typescript file
    tsc <file name> --watch for countinu watching files
*/

    
// Intro of typescript

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

