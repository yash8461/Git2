"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee = [
    { ID: 1, FirstName: "Aay", LastName: "Singh", Address: "123 Ahemdabad", Salary: 50000 },
    { ID: 2, FirstName: "Raj", LastName: "Yadav", Address: "456 Second Ave", Salary: 60000 },
    { ID: 3, FirstName: "Subham", LastName: "Rajput", Address: "789 Third St", Salary: 70000 },
    { ID: 4, FirstName: "Elon", LastName: "Musk", Address: "101 Fourth Ave", Salary: 80000 },
    { ID: 5, FirstName: "Bill", LastName: "Gates", Address: "111 Fifth St", Salary: 90000 },
];
function search(id) {
    var index = employee.findIndex(function (value) { return value.id === id; });
    if (index !== -1) {
        return employee[index];
    }
}
console.log(search(3));
