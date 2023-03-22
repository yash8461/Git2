// Define the employee data structure
interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Address: string;
  Salary: number;
}

// Define an array of employee data
const employees: Employee[] = [
  { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St", Salary: 50000 },
  { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave", Salary: 60000 },
  { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St", Salary: 70000 },
  { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave", Salary: 80000 },
  { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St", Salary: 90000 }
];

// Define a function to search for an employee by their ID
function searchEmployeeByID(ID: number): Employee | undefined {
  const index = employees.findIndex((employee) => employee.ID === ID);
  return index !== -1 ? employees[index] : undefined;
}

// Define a function to insert a new employee into the array
function insertEmployee(employee: Employee): void {
  employees.push(employee);
}

// Define a function to delete an employee from the array by their ID
function deleteEmployeeByID(ID: number): void {
  const index = employees.findIndex((employee) => employee.ID === ID);
  if (index !== -1) {
    employees.splice(index, 1);
  }
}

// Test the functions
console.log(searchEmployeeByID(3)); // Output: { ID: 3, FirstName: 'Bob', LastName: 'Johnson', Address: '789 Third St', Salary: 70000 }
insertEmployee({ ID: 6, FirstName: "Karen", LastName: "Davis", Address: "222 Sixth Ave", Salary: 100000 });
console.log(employees); // Output: [ { ID: 1, FirstName: 'John', LastName: 'Doe', Address: '123 Main St', Salary: 50000 }, { ID: 2, FirstName: 'Jane', LastName: 'Smith', Address: '456 Second Ave', Salary: 60000 }, { ID: 3, FirstName: 'Bob', LastName: 'Johnson', Address: '789 Third St', Salary: 70000 }, { ID: 4, FirstName: 'Alice', LastName: 'Williams', Address: '101 Fourth Ave', Salary: 80000 }, { ID: 5, FirstName: 'David', LastName: 'Brown', Address: '111 Fifth St', Salary: 90000 }, { ID: 6, FirstName: 'Karen', LastName: 'Davis', Address: '222 Sixth Ave', Salary: 100000 } ]
deleteEmployeeByID(4);
console.log(employees); // Output: [ { ID: 1, FirstName: 'John', LastName: 'Doe', Address: '123 Main St', Salary: 50000 }, { ID: 2, FirstName: 'Jane', LastName: 'Smith', Address: '456 Second Ave', Salary: 60000 }, { ID: 3, FirstName: 'Bob', LastName: 'Johnson', Address: '789 Third St', Salary: 70000 }, { ID: 5, FirstName: 'David', LastName: 'Brown', Address:
