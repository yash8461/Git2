 let  employees : any =[
    {ID:123, FirstName:"Ajay", LastName:"singh", Address:[{flatNo:23, city:"Indore",state:"MP"}], Salary: 8000 },
    {ID:2221, FirstName:"Vivek", LastName:"Soni", Address:[{flatNo:86, city:"Bhopal",state:"MP"}], Salary: 9000 },
    {ID:1344, FirstName:"Shivam", LastName:"Borban", Address:[{flatNo:53, city:"Ahmedabad",state:"Gujrat"}], Salary: 19000 },
    {ID:224, FirstName:"Rahul", LastName:"Yadav", Address:[{flatNo:33, city:"Surat",state:"Gujrat"}], Salary: 20000 },
    {ID:555, FirstName:"Raj", LastName:"singh", Address:[{flatNo:43, city:"Banglore",state:"Karnataka"}], Salary:30000 },

 ]

 //    Employee details before push data
 console.log(" Employee details before push data")
 console.log(employees)


 // Employee details after push data
  let newData =  {ID:565, FirstName:"Anil", LastName:"Yadav", Address:[{flatNo:46, city:"Vadodara",state:"gujrat"}], Salary:3000 };

  employees.push(newData );
  console.log("Employee details after push data")
  console.log(employees)


//   Employee details after delete data
  console.log("Employee details after delete data")
  employees.pop();
  console.log(employees)
 

  //   Employee details searching by id
  var k =565;

  for (let i = 0; i < employees.length; i++) {
   
   if(employees[i].ID==k){
 console.log("ID: "+ employees[i].ID)
 console.log("FirstName: "+ employees[i].FirstName)
 console.log( "LastName: "+ employees[i].LastName)
 console.log( "Address: \n \t flatNo: "+ employees[i].Address[0].flatNo ,"\n \t city: "+ employees[i].Address[0].city,"\n \t state: "+  employees[i].Address[0].state)
 console.log( "Salary: "+ employees[i].Salary)
   }
  }



//   employee details searching by indexnumber
 var k = 3;

 console.log("ID: "+ employees[k].ID)
 console.log("FirstName: "+ employees[k].FirstName)
 console.log( "LastName: "+ employees[k].LastName)
 console.log( "Address: \n \t flatNo: "+ employees[k].Address[0].flatNo ,"\n \t city: "+ employees[k].Address[0].city,"\n \t state: "+  employees[k].Address[0].state)
 console.log( "Salary: "+ employees[k].Salary)


 
 






