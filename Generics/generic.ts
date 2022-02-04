// Generics in Type Script

function users(data: Object): Object {
  return data;
}
let data = {
  name: "Shivam Singh",
  age: 24,
  msg: "wellcome",
};
console.log(users(data));

function usersGeneric<T>(data: T): T {
  return data;
}
let dataGenric = [2, 4, "king"];
console.log(usersGeneric(dataGenric));
