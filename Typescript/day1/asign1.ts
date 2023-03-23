
interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Address: string;
  Salary: number;
};



const employees: Employee[] = [
  { ID: 1, FirstName: "Ajay", LastName: "Singh", Address: "123 Ahemdabad", Salary: 50000 },
  { ID: 2, FirstName: "Raj", LastName: "Yadav", Address: "456 Second Ave", Salary: 60000 },
  { ID: 3, FirstName: "Subham", LastName: "Rajput", Address: "789 Third St", Salary: 70000 },
  { ID: 4, FirstName: "Elon", LastName: "Musk", Address: "101 Fourth Ave", Salary: 80000 },
  { ID: 5, FirstName: "Bill", LastName: "Gates", Address: "111 Fifth St", Salary: 90000 }
];


function searchEmployeeByID(ID: number): Employee | undefined {
  const index = employees.findIndex((employe) => employe.ID === ID);
  return index !== -1 ? employees[index] : undefined;
}


function insertEmployee(employee: Employee): void {
  employees.push(employee);
}


function deleteEmployeeByID(ID: number): void {
  const index = employees.findIndex((employee) => employee.ID === ID);
  if (index !== -1) {
    employees.splice(index, 1);
  }
}

// Test the functions
console.log(searchEmployeeByID(4)); 
insertEmployee({ ID: 6, FirstName: "Karan", LastName: "Davis", Address: "222 Sixth Ave", Salary: 100000 });
console.log(employees); 
// deleteEmployeeByID(4);
// console.log(employees); 
