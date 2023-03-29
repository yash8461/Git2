

const employees: any[] = [
  { id: "e1", name: "Aay Singh", city: "Mumbai", doj: new Date("2020-01-06") },
  { id: "e2", name: "Raj Yadav", city: "Delhi", doj: new Date("2021-05-01") },
  { id: "e3", name: "Subham Rajput", city: "Mumbai", doj: new Date("2019-11-01") },
  { id: "e4", name: "Elon Musk", city: "Bangalore", doj: new Date("2022-02-01") },
  { id: "e5", name: "Bill Gates", city: "Mumbai", doj: new Date("2020-12-01") }
];



const employeeById = employees.find(employee => employee.id === "e2");
console.log("Employee by ID:", employeeById);


const employeesJoinedAfter2020 = employees.filter(employee => employee.doj.getFullYear() > 2020);
console.log("Employees joined after 2020:", employeesJoinedAfter2020);


const employeesJoinedAfter2020AndMumbai = employees.filter(employee => employee.doj.getFullYear() > 2020 && employee.city === "Mumbai");
console.log("Employees joined after 2020 and stays in Mumbai city:", employeesJoinedAfter2020AndMumbai);
