CREATE DATABASE	tracker_db;
USE tracker_db;


CREATE TABLE Department (
id int(20) NOT NULL AUTO_INCREMENT,
  DepartmentName VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE Role (
  id INT (40) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Title VARCHAR(30) NOT NULL,
  Salary INT NOT NULL,
  DepartmentID  INT NOT NULL,
  primary key (id)
);

CREATE TABLE Employee (
   id INT (40) AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  RoleID INT AUTO_INCREMENT ,
  ManagerID INT AUTO_INCREMENT ,
  primary key (id)
  );



INSERT INTO Role (id,title, salary, departmentID ) values ('', 'Printer','50', '');
INSERT INTO Employee (id, firstname,lastname,roleID,managerID ) values ('', 'Kelsey','Joy','','');
INSERT INTO Employee (id, firstname,lastname,roleID,managerID ) values ('', 'Levi','DeJean','','');





