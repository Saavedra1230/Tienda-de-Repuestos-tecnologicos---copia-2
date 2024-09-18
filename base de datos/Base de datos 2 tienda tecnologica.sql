create database tienda_tec;
use Tienda_tec;

create table Users(
name varchar(50),
email varchar(50),
password varchar(255),
age int,
phoneNumber int,
address varchar(100),
CC int,
primary key (CC));

create table Products(
name_p varchar(50),
description_p varchar(500),
value_p int,
feature_p varchar(100),
id_p int,
amount_p int,
primary key (id_p));

SELECT * from Users;