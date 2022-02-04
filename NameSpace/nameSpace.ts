// NameSpace in TypeScript

/*
For run this file Use => tsc <file name> --outfile <Out file name>
For continu run this file Use => tsc <file name> --outfile <Out file name> --watch
*/

/// <reference path="./Utils.ts" />

namespace UsersUtils {
  export class Users extends Parent implements userType {
    getName() { // alwase use same name or defind same dunction which have in interface
      return this.name;
    }
  }
}

let showName = new UsersUtils.Users();
showName.setName("Mohan Patel");
console.log(showName.getName());
