// interface Employee {
//   id: string;
//   name: string;
//   city: string;
//   doj: Date;
// }
var employees = [
    { id: "e1", name: "John Doe", city: "Mumbai", doj: new Date("2020-01-01") },
    { id: "e2", name: "Jane Smith", city: "Delhi", doj: new Date("2021-05-01") },
    { id: "e3", name: "Bob Johnson", city: "Mumbai", doj: new Date("2019-11-01") },
    { id: "e4", name: "Alice Williams", city: "Bangalore", doj: new Date("2022-02-01") },
    { id: "e5", name: "Tom Brown", city: "Mumbai", doj: new Date("2020-12-01") }
];
// Search the employee with ID
var employeeById = employees.find(function (employee) { return employee.id === "e2"; });
console.log("Employee by ID:", employeeById);
// Search the employees who has joined after year 2020
var employeesJoinedAfter2020 = employees.filter(function (employee) { return employee.doj.getFullYear() > 2020; });
console.log("Employees joined after 2020:", employeesJoinedAfter2020);
// Search the employee who has joined after year 2020 and stays in Mumbai city
var employeesJoinedAfter2020AndMumbai = employees.filter(function (employee) { return employee.doj.getFullYear() > 2020 && employee.city === "Mumbai"; });
console.log("Employees joined after 2020 and stays in Mumbai city:", employeesJoinedAfter2020AndMumbai);
