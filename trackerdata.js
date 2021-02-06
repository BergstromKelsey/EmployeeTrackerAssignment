var mysql = require("mysql");
var inquirer = require("inquirer");
const e = require("express");
// const fs = require("fs");
// const cTable = require('console.table');
rowCollectionOnDone: true

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "tracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});
  // employeeInfo();


  inquirer.prompt([{
    message: "Enter Department Name",
    name: "deptName"
  }])
.then (function ({deptName}) {
var sql = `INSERT INTO Department (departmentName) VALUE ("${deptName}")`;
connection.query(sql, function(err,result){
  if (err) throw err;
  console.log('data inserted')
});
})


// function employeeInfo(){
  // inquirer.prompt([{
  //   message: "Enter Department Name",
  //   name: "deptName"
  // }])

//   {
//     message: "Enter Employee Title",
//     name: "roles"
//   },
//   {
//     message: "Enter Employee Salary",
//     name: "salary"
//   },
//   {
//     message: "Enter Employee First Name",
//     name: "firstname"
//   },
//   {
//     message: "Enter Employee Last Name",
//     name: "lastname"
//   },
//   {
    
//     type: "list",
//     message: "Select role",
//     choices: [
//       "Add Another Employee",
//       "View All Employee Information",
//       "Update Employee Role",
//     ],
//     name: "options"
//   }
// ])
// .then ((options,err) => {
//     if (options === "Add Another Employee") {
//       employeeInfo();
//     }
//     else if (options === "View All Employee Information") {
//       seeAll();
//     }
//     else {
//       Update();
//     }
//     // .then(function addEmployee({options}) {
//     //   if (`${options}` === "Add Another Employee") {
//     //     employeeInfo()
//     //   }
//     //   else if
//     //     (`${options}` === "View All Employee Information") {
//     //     seeAll()
//     //   }
//     //   else {
//     //     Update()
//     //   }
//     function seeAll() {

//       connection.query("SELECT * FROM Department", function (err, res) {
//         if (err)
//           throw err;
//         console.table(res);
//       });
//       connection.query("SELECT * FROM Roles", function (err, res) {
//         if (err)
//           throw err;
//         console.table(res);
//       });
//       connection.query("SELECT * FROM Employee", function (err, res) {
//         if (err)
//           throw err;
//         console.table(res);
//       });

//       inquirer.prompt([{
//         type: "list",
//         message: "Select role",
//         choices: [
//           "Add Another Employee",
//           "View All Employee Information",
//           "Update Employee Role"
//         ],
//         name: "nextnext"
//       },
//       addEmployee()
//       ]);


//     }

//     function Update() {

//       inquirer.prompt([{
//         name: "empUpdate",
//         type: "list",
//         message: "Select an employee to update",
//         choices: connection.query("SELECT firstname FROM Employee", function (err, res) {
//           if (err)
//             throw err;
//           console.table(res);
//         })
//       }
//       ]);
//     }
// })
// }
  