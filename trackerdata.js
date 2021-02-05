var mysql = require("mysql");
var inquirer = require("inquirer");
const fs = require("fs");
// const cTable = require('console.table');
rowCollectionOnDone: true



var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "tracker_db"
});





connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  afterConnection();
  afterConnectionTwo();
  afterConnectionThree();
   employeeInfo();
   
});



function afterConnection() {
  connection.query("SELECT * FROM Department", function (err, res) {
    if (err) throw err;
    console.table(res);


  });
}
function afterConnectionTwo() {
  connection.query("SELECT * FROM Roles", function (err, res) {
    if (err) throw err;
    console.table(res);


  });
}
function afterConnectionThree() {
  connection.query("SELECT * FROM Employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();

  });

}

const employees =[]
function employeeInfo() {
  inquirer.prompt([{
    message: "Enter Department Name",
    name: "name"
  },
  {
    message: "Enter Employee Title",
    name: "roles"
  },
  {
    message: "Enter Employee Salary",
    name: "salary"
  },
  {
    message: "Enter Employee First Name",
    name: "firstname"
  },
  {
  message: "Enter Employee Last Name",
    name: "lastname"
  },
  {
    type: "list",
    message: "Select role",
    choices: [
        "Add Another Employee",
        "View All Employee Information",
        "Update Employee Role"
    ],
    name: "next"
  }])

.then(function addEmployee({next}) {
  let newEmp;
  if (next === "Add Another Employee") {
      employeeInfo();}
  // } else if (role === "View All Employee Information") {
  //     attatch html here
  // } else {
  //     function to update an employees role here
  
 })
}
// employees.push(employeeInfo);
// addHtml(newEmp)
// .then(function() {
//     if (next === "Add Another Employee") {
//         addEmployee();
//     } else {
//         finishedHtml();
//     }
// });

// 