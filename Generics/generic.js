// Generics in Type Script
function users(data) {
    return data;
}
var data = {
    name: "Shivam Singh",
    age: 24,
    msg: "wellcome"
};
console.log(users(data));
function usersGeneric(data) {
    return data;
}
var dataGenric = [2, 4, "king"];
console.log(usersGeneric(dataGenric));
