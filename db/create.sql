create database if not exists rail;
use rail;
drop table if exists passenger;
drop table if exists fare_table;
drop table if exists tickets;
drop table if exists train_details;

create table if not exists passenger(username varchar(20) primary key, aadhaar numeric unique not null, profile_name varchar(20) not null, age numeric not null, gender char(1) not null, address varchar(50) not null, mobile numeric not null, pass varchar(20) not null, mail varchar(20) not null, check(age >= 18));
create table if not exists train_details(train_no varchar(20) primary key, train_name varchar(20) not null, from_station varchar(20) not null, to_station varchar(20) not null, total_coach numeric not null, total_seats numeric not null, booked_seats numeric not null);
create table if not exists fare_table(station_id varchar(20) not null, train_no varchar(20) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
create table if not exists tickets(ticket_no varchar(20) primary key, username varchar(20), profile_name varchar(20) not null, age numeric not null, gender char(1) not null, mobile numeric not null, date_ date not null, train_no varchar(20) not null, coach_no varchar(20) not null, seat_no numeric not null, from_station varchar(20) not null, to_station varchar(20) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
