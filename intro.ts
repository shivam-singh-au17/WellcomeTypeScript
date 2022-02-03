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
