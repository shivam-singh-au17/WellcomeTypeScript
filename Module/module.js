"use strict";
// Moduls in TypeScript
exports.__esModule = true;
/*
convert all type script file into js fiile use this command => tsc *.ts -w
 */
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var student = new Student_1["default"]();
console.log('student:', student);
var teacher = new Teacher_1["default"]();
console.log('teacher:', teacher);
