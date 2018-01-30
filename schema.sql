CREATE DATABASE employeeid;
USE employeeid;

CREATE TABLE `employee` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `employeeIdNumber` int(4) NOT NULL,
  `name` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) );