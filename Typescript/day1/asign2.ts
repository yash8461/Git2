// Define the employee data structure
interface Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
  }
  
  // Define the emp data structure
  interface Emp {
    ID: number;
    FullName: string;
    FlatNumber: string;
    City: string;
    State: string;
    BasicSalary: number;
    PF: number;
  }
  
  // Define an array of employee data
  const employees: Employee[] = [
    { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago, IL", Salary: 70000 },
    { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami, FL", Salary: 80000 },
    { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 90000 }
  ];
  
  // Define a function to split the address field into separate fields
  function splitAddress(address: string): [string, string, string] {
    const [flatNumber, cityState] = address.split(",");
    const [city, state] = cityState.trim().split(" ");
    return [flatNumber.trim(), city.trim(), state.trim()];
  }
  
  // Create a new array emp by joining employees with additional fields
  const emp: Emp[] = employees.map((employee) => {
    const [FlatNumber, City, State] = splitAddress(employee.Address);
    const BasicSalary = employee.Salary;
    const PF = Math.round(0.12 * BasicSalary);
    const FullName = `${employee.FirstName} ${employee.LastName}`;
    return { ID: employee.ID, FullName, FlatNumber, City, State, BasicSalary, PF };
  });
  
  // Display the emp array
  console.log(emp);
  
  // Compute the total salary for all employees
  const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);
  
  // Display the total salary
  console.log(`Total Salary: ${totalSalary}`);
  