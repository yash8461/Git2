// Define the employee data structure
// interface Employee {
//     ID: number;
//     FirstName: string;
//     LastName: string;
//     Address: string;
//     Salary: number;
//   }
//   // Define the emp data structure
//   interface Emp {
//     ID: number;
//     FullName: string;
//     FlatNumber: string;
//     City: string;
//     State: string;
//     BasicSalary: number;
//     PF: number;
//   }
// Define an array of employee data
var employees = [
    { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago fgfgf, IL", Salary: 70000 },
    { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami fgfg, FL", Salary: 80000 },
    { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 1000 }
];
// Define a function to split the address field into separate fields
function splitAddress(address) {
    var _a = address.split(","), flatNumber = _a[0], cityState = _a[1];
    var _b = cityState.trim().split(" "), city = _b[0], state = _b[1];
    return [flatNumber.trim(), city.trim(), state.trim()];
}
// Create a new array emp by joining employees with additional fields
var emp = employees.map(function (employee) {
    var _a = splitAddress(employee.Address), FlatNumber = _a[0], City = _a[1], State = _a[2];
    var BasicSalary = employee.Salary;
    var PF = Math.round(0.12 * BasicSalary);
    var FullName = "".concat(employee.FirstName, " ").concat(employee.LastName);
    return { ID: employee.ID, FullName: FullName, FlatNumber: FlatNumber, City: City, State: State, BasicSalary: BasicSalary, PF: PF };
});
// Display the emp array
console.log(emp);
// Compute the total salary for all employees
var totalSalary = employees.reduce(function (sum, employee) { return sum + employee.Salary; }, 0);
// Display the total salary
console.log("Total Salary: ".concat(totalSalary));
