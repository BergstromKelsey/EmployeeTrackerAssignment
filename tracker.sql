
CREATE DATABASE	tracker_db;
USE tracker_db;


CREATE TABLE Department (
id int(20) NOT NULL AUTO_INCREMENT,
  DepartmentName VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE Role (
  id int (40) NOT NULL AUTO_INCREMENT,
  Title VARCHAR(30) NOT NULL,
  Salary INT NOT NULL,
  DepartmentID  INT NOT NULL,
  primary key (id)
);

CREATE TABLE Employee (
   id INT (40) AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  RoleID INT  ,
  ManagerID INT  ,
  primary key (id)
  );



SELECT * FROM Department;
SELECT * FROM Role;
SELECT * FROM Employee





