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
  },
  {
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

    .then(function deparmentValues({ depTitle }, req, res) {
      var sql = "INSERT INTO Department (DepartmentName) VALUES ?";
      var values = [
        [`"${depTitle}"`],]
      connection.query(sql, [values], function (err) {
        if (err) throw err


          .then(function roleValues({ roleTitle, empSal, depID }, req, res) {
            var sql = "INSERT INTO Role (Title,Salary,DepartmentID) VALUES ?";
            var values = [
              [`"${roleTitle}","${empSal}","${depID}"`],]
            connection.query(sql, [values], function (err) {
              if (err) throw err


                .then(function employeeValues({ firstname, lastname, roleID, managerID }, req, res) {
                  var sql = "INSERT INTO Employee (firstname,lastname, RoleID ,ManagerID) VALUES ?";
                  var values = [
                    [`"${firstname}","${lastname}","${roleID}"),"${managerID}"`],]
                  connection.query(sql, [values], function (err) {
                    if (err) throw err
                    console.log("Data Inserted")
                  })
                })
            })
          })
      })
    })
    .then(function nextTask() {
      inquirer.prompt([{
        type: "list",
        message: "What would you like to do next?",
        choices: [
          "Add Another Employee",
          "View All Employee Information",
          "Update Employee Role",
          "All done"
        ],
        name: "next"

      }])
        // addEmployee();
        .then(function addEmployee({ next }) {

          if (next === "Add Another Employee") {
            roleQuestions();
          }
          else if
            (next === "View All Employee Information") {
            seeAll();
          }
          else if
            (next === "Update Employee Role") {
            Update();
          }
          else
            console.log("All Finished! ")
        }



        )
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
          nextTask();
        });

      }







      function Update() {
        inquirer.prompt([{
          message: "Enter name of Employee whose role you would like to update:",
          name: "enteredname"
        },
        {
          message: "Enter New Role Title",
          name: "NewroleTitle"
        }])
          .then(function ({ NewroleTitle, roleTitle, firstname, enteredname }) {
            var changes = `UPDATE role SET Title = ("${NewroleTitle}") WHERE Title = ("${roleTitle}")  `
            connection.query(changes, function (err, result) {
              if (err) throw err;
              console.log('data inserted')
              nextTask();
            }

            )
          }
          )
      }

    })
}

// }
// AND ("${firstname}") === ("${enteredname}") 