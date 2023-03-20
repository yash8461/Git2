let  employee : any =[
    {ID:231, Name:"Ajay", city:"Bhopal",  DOJ: "10 / 10 / 2021" },
    {ID:531, Name:"Shivam", city:"Indore",  DOJ: "12 / 10 / 2016" },
    {ID:601, Name:"Rishi", city:"Ahmedad",  DOJ: "5 / 10 / 2023" },
    {ID:721, Name:"Raj", city:"surat",  DOJ: "22/ 10 / 2019" },
    {ID:581, Name:"Nishant", city:"Banglore",  DOJ: "10/ 10 / 2022" },
 ]

//  Searching the employee with ID

//  var k =721;

//   for (let i = 0; i < employee.length; i++) {
   
//    if(employee[i].ID==k){
//  console.log("ID: "+ employee[i].ID)
//  console.log("Name: "+ employee[i].Name)
//  console.log( "city: "+ employee[i].city)
//  console.log( "DOJ: "+ employee[i].DOJ)
//    }
//   }

  // Searching the employees who has joined after year 2020

  for (let i = 0; i < employee.length; i++) {
   
    if(employee[i].DOJ > " / / 2020 "){
  console.log("ID: "+ employee[i].ID)
  console.log("Name: "+ employee[i].Name)
  console.log( "city: "+ employee[i].city)
  console.log( "DOJ: "+ employee[i].DOJ)
    }
   }
