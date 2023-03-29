
  const employees:any[] = [
    { ID: 1, FirstName: "Aay", LastName: "Singh", Address: "123 Ahemdabad", Salary: 50000 },
    { ID: 2, FirstName: "Raj", LastName: "Yadav", Address: "456 Second Ave", Salary: 60000 },
    { ID: 3, FirstName: "Subham", LastName: "Rajput", Address: "789 Third St", Salary: 70000 },
    { ID: 4, FirstName: "Elon", LastName: "Musk", Address: "101 Fourth Ave", Salary: 80000 },
    { ID: 5, FirstName: "Bill", LastName: "Gates", Address: "111 Fifth St", Salary: 90000 },
  ];
  
console.log(employees)
  const empl:any[] = [
    { ID: 6, FirstName: "Aay", LastName: "Singh", Address: "123 Ahemdabad", Salary: 50000 },
    { ID: 7, FirstName: "Raj", LastName: "Yadav", Address: "456 Second Ave", Salary: 60000 },
    { ID: 8, FirstName: "Subham", LastName: "Rajput", Address: "789 Third St", Salary: 70000 },
    { ID: 9, FirstName: "Elon", LastName: "Musk", Address: "101 Fourth Ave", Salary: 80000 },
    { ID: 10, FirstName: "Bill", LastName: "Gates", Address: "111 Fifth St", Salary: 90000 },
  ];

    var result = employees.concat(empl)

   console.log(result)
  function splitAddress(address: string): [string, string, string] {
    const [flatNumber, cityState] = address.split(",");
    const [city, state] = cityState.trim().split(" ");
    return [flatNumber.trim(), city.trim(), state.trim()];
  }
  


  const emp: any[] = employees.map((employee) => {
    const [FlatNumber, City, State] = splitAddress(employee.Address);
    const BasicSalary = employee.Salary;
    const PF = Math.round(0.12 * BasicSalary);
    const FullName = `${employee.FirstName} ${employee.LastName}`;
    return { ID: employee.ID, FullName, FlatNumber, City, State, BasicSalary, PF };
  });
  

  console.log(emp);
  
 
  const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary,0);
  
  console.log(`Total Salary: ${totalSalary}`);
  