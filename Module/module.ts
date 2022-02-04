// Moduls in TypeScript

/*
convert all type script file into js fiile use this command => tsc *.ts -w
 */

import studentLogin from "./Student";
import teacherLogin from "./Teacher";

let student = new studentLogin();
console.log('student:', student)

let teacher = new teacherLogin();
console.log('teacher:', teacher)