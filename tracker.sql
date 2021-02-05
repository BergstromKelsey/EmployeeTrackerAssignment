CREATE DATABASE	tracker_db;
USE tracker_db;

CREATE TABLE Department (
  id INT (10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  departmentName VARCHAR(30),
  primary key (id)
);

CREATE TABLE Roles (
  id INT (10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  departmentID  INT NOT NULL,
  primary key (id)
);

CREATE TABLE Employee (
  id INT (10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  RoleID INT AUTO_INCREMENT ,
  managerID INT AUTO_INCREMENT ,
  primary key (id)
  );

INSERT INTO Department (id, departmentName ) values ('', 'Printing');
INSERT INTO Roles (id,title, salary, departmentID ) values ('', 'Printer','50', '');
INSERT INTO Employee (id, firstname,lastname,roleID,managerID ) values ('', 'Kelsey','Joy','','');

SELECT * FROM Department;
SELECT * FROM Roles; 
SELECT * FROM Employee;



