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
  roleQuestions();
  // console.log("connected as id " + connection.threadId);
});

function roleQuestions() {
  inquirer.prompt([{
    message: "Enter Department Title",
    name: "depTitle"
  }, {
    message: "Enter Employees Role Title",
    name: "roleTitle"
  },
  {
    message: "Enter Employees Salary",
    name: "empSal"
  },
  {
    message: "Enter Department ID",
    name: "depID"
  },
  {
    message: "Enter Employees First Name",
    name: "firstname"
  },
  {
    message: "Enter Employees Last Name",
    name: "lastname"
  },
  {
    message: "Enter Employees Role ID",
    name: "roleID"
  },
  {
    message: "Enter Managers ID",
    name: "managerID"
  }])

    .then(function ({ roleTitle, empSal, depID, depTitle }) {
      var one = `INSERT INTO Department (DepartmentName) VALUES ("${depTitle}")`;
      var two = `INSERT INTO Role (Title,Salary,DepartmentID) VALUES ("${roleTitle}","${empSal}","${depID}")`;
      // var three = `INSERT INTO Employee (firstname,lastname,RoleID,ManagerID) VALUES ("${firstname}","${lastname}","${roleID}"),"${managerID}")`;
      connection.query(one, two, function (err, result) {
        if (err) throw err;
        console.log('data inserted')

        nextTask();
      }
        // .then (function({firstname,lastname,roleID,managerID}){
        //   var three = `INSERT INTO Employee (firstname,lastname,RoleID,ManagerID) VALUES ("${firstname}","${lastname}","${roleID}"),"${managerID}")`;
        //   connection.query(three, function(err,result){
        //     if (err) throw err;
        //     console.log('data inserted')
        // })} 
        // )

      )
    })



function nextTask() {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do next?",
    choices: [
      "Add Another Employee",
      "View All Employee Information",
      // "Update Employee Role",
      // "All done"
    ],
    name: "next"
  
}])
.then(function addEmployee({next}) {

  if (next === "Add Another Employee") {
      roleQuestions()}
   else if 
   (next === "View All Employee Information") 
      seeAll();


    
  function seeAll() {
    connection.query("SELECT * FROM Employee", function (err, result) {
      if (err) throw err;
      console.table(result)
    });
    connection.query("SELECT * FROM Department", function (err, result) {
      if (err) throw err;
      console.table(result)
    });
    connection.query("SELECT * FROM Role", function (err, result) {
      if (err) throw err;
      console.table(result)
    });



  }


}

)}
}



