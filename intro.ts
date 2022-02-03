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
