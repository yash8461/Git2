export{}

interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Address: string;
  Salary: number;
}


interface Emp {
  ID: number;
  FullName: string;
  FlatNumber: string;
  City: string;
  State: string;
  BasicSalary: number;
  PF: number;
}


const employees: Employee[] = [
  { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York", Salary: 50000 },
  { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles", Salary: 60000 },
  { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago Ahh", Salary: 70000 },
  { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami Gujraat", Salary: 80000 },
  { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco ", Salary: 90000 }
];


function splitAddress(address: string): [string, string, string] {
  const [flatNumber, cityState] = address.split(",");
  const [city, state] = cityState.trim().split(" ");
  return [flatNumber.trim(), city.trim(), state.trim()];
}

const emp: Emp[] = employees.map((employee) => {
  const [FlatNumber, City, State] = splitAddress(employee.Address);

  const BasicSalary = employee.Salary;
  const PF = Math.round(0.12 * BasicSalary);
  const FullName = `${employee.FirstName} ${employee.LastName}`;
  return { ID: employee.ID, FullName, FlatNumber, City, State, BasicSalary, PF };
});


console.log(emp);


const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);


console.log(`Total Salary: ${totalSalary}`);
