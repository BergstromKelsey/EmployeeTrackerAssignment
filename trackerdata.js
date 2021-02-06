var mysql = require("mysql");
var inquirer = require("inquirer");
// const fs = require("fs");
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
  
  employeeInfo();

});



function employeeInfo() {
  inquirer.prompt([{
    message: "Enter Department Name",
    name: "named"
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
  
    if (next === "Add Another Employee") {
        employeeInfo()}
     else if 
     (next === "View All Employee Information") 
        seeAll();
    
    // connection.query(function(err){
    //       if (err) throw err;
    //       var testing=`INSERT into Department(departmentName)values="${name}"`
    //   connection.query(testing,function(err,result){
    //     if (err) throw err;
    //     console.log("working")
      
    //   })
      })
     
function seeAll(){

  connection.query("SELECT * FROM Department", function (err, res) {
    if (err) throw err;
    console.table(res);


  });

  connection.query("SELECT * FROM Roles", function (err, res) {
    if (err) throw err;
    console.table(res);


  });

  connection.query("SELECT * FROM Employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    

  });

}
       
  }
