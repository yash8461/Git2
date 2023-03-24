"use strict";
exports.__esModule = true;
var employees = [
    { ID: 1, FirstName: "Aay", LastName: "Singh", Address: "123 Ahemdabad", Salary: 50000 },
    { ID: 2, FirstName: "Raj", LastName: "Yadav", Address: "456 Second Ave", Salary: 60000 },
    { ID: 3, FirstName: "Subham", LastName: "Rajput", Address: "789 Third St", Salary: 70000 },
    { ID: 4, FirstName: "Elon", LastName: "Musk", Address: "101 Fourth Ave", Salary: 80000 },
    { ID: 5, FirstName: "Bill", LastName: "Gates", Address: "111 Fifth St", Salary: 90000 },
];
function searchEmployeeByID(ID) {
    var index = employees.findIndex(function (employe) { return employe.ID === ID; });
    return index !== -1 ? employees[index] : undefined;
}
function insertEmployee(employee) {
    employees.push(employee);
}
function deleteEmployeeByID(ID) {
    var index = employees.findIndex(function (employee) { return employee.ID === ID; });
    if (index !== -1) {
        employees.splice(index, 1);
    }
}
var str = "";
for (var i = 0; i < employees.length; i++) {
    str +=
        "\n                                          \n\n<tr class=\"bg-white border-b dark:bg-gray-900 dark:border-gray-700\">\n<th scope=\"row\" class=\"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\">\n".concat(employees[i].ID, "\n</th>\n<td class=\"px-6 py-4\">\n").concat(employees[i].FirstName, "\n</td>\n<td class=\"px-6 py-4\">\n").concat(employees[i].LastName, "\n</td>\n<td class=\"px-6 py-4\">\n").concat(employees[i].Address, "\n</td>\n<td class=\"px-6 py-4\">\n").concat(employees[i].Salary, "\n</td>\n\n</tr>\n\n\n ");
}
document.querySelector('#output').innerHTML = str;
console.log("All the Employees\n");
console.log(employees);
console.log("Search by indexNumber\n");
console.log(employees[3]);
console.log("Search by EmployeeByID\n");
console.log(searchEmployeeByID(3));
console.log("List after push\n");
insertEmployee({ ID: 6, FirstName: "Karan", LastName: "Davis", Address: "222 Sixth Ave", Salary: 100000 });
console.log(employees);
console.log("Delete by EmployeeByID\n");
deleteEmployeeByID(3);
console.log(employees);
