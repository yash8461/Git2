export {}
  const employees:any[] = [
    { ID: 1, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 2, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 3, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago fgfgf, IL", Salary: 70000 },
    { ID: 4, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami fgfg, FL", Salary: 80000 },
    { ID: 5, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 1000 }
  ];
  

  const empl:any[] = [
    { ID: 6, FirstName: "John", LastName: "Doe", Address: "123 Main St, New York, NY", Salary: 50000 },
    { ID: 7, FirstName: "Jane", LastName: "Smith", Address: "456 Second Ave, Los Angeles, CA", Salary: 60000 },
    { ID: 8, FirstName: "Bob", LastName: "Johnson", Address: "789 Third St, Chicago fgfgf, IL", Salary: 70000 },
    { ID: 9, FirstName: "Alice", LastName: "Williams", Address: "101 Fourth Ave, Miami fgfg, FL", Salary: 80000 },
    { ID: 10, FirstName: "David", LastName: "Brown", Address: "111 Fifth St, San Francisco, CA", Salary: 1000 }
  ];

    var result = employees.concat(empl)

   console.log(result)
  function splitAddress(address: string): [string, string, string] {
    const [flatNumber, cityState] = address.split(",");
    const [city, state] = cityState.trim().split(" ");
    return [flatNumber.trim(), city.trim(), state.trim()];
  }
  


  const emp: any[] = result.map((result) => {
    const [FlatNumber, City, State] = splitAddress(result.Address);
    const BasicSalary = result.Salary;
    const PF = Math.round(0.12 * BasicSalary);
    const FullName = `${result.FirstName} ${result.LastName}`;
    return { ID: result.ID, FullName, FlatNumber, City, State, BasicSalary, PF };
  });
  

  console.log(emp);
  
 
  const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary,0);
  
  console.log(`Total Salary: ${totalSalary}`);
  