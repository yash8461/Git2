var employees = [
    { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago fgfgf, IL", Salary: 70000 },
    { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami fgfg, FL", Salary: 80000 },
    { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 1000 }
];
var empl = [
    { ID: 6, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 7, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 8, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago fgfgf, IL", Salary: 70000 },
    { ID: 9, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami fgfg, FL", Salary: 80000 },
    { ID: 10, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 1000 }
];
var result = employees.concat(empl);
console.log(result);
function splitAddress(address) {
    var _a = address.split(","), flatNumber = _a[0], cityState = _a[1];
    var _b = cityState.trim().split(" "), city = _b[0], state = _b[1];
    return [flatNumber.trim(), city.trim(), state.trim()];
}
var emp = employees.map(function (employee) {
    var _a = splitAddress(employee.Address), FlatNumber = _a[0], City = _a[1], State = _a[2];
    var BasicSalary = employee.Salary;
    var PF = Math.round(0.12 * BasicSalary);
    var FullName = "".concat(employee.FirstName, " ").concat(employee.LastName);
    return { ID: employee.ID, FullName: FullName, FlatNumber: FlatNumber, City: City, State: State, BasicSalary: BasicSalary, PF: PF };
});
console.log(emp);
var totalSalary = employees.reduce(function (sum, employee) { return sum + employee.Salary; }, 0);
console.log("Total Salary: ".concat(totalSalary));
