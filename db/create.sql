create database if not exists rail;
use rail;
drop table if exists passenger;
drop table if exists fare_table;
drop table if exists tickets;
drop table if exists train_details;
drop table if exists t_schedule;

create table if not exists passenger(username varchar(25) primary key, aadhaar numeric unique not null, profile_name varchar(25) not null, age numeric not null, gender char(1) not null, address varchar(50) not null, mobile numeric not null, pass varchar(25) not null, mail varchar(25) not null, check(age >= 18));
create table if not exists train_details(train_no varchar(25) primary key, train_name varchar(25) not null, from_station varchar(25) not null, to_station varchar(25) not null, total_coach numeric not null, total_seats numeric not null, booked_seats numeric not null default 0);
create table if not exists fare_table(station_id varchar(25) not null, train_no varchar(25) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
create table if not exists tickets(ticket_no varchar(25) primary key, username varchar(25), profile_name varchar(25) not null, age numeric not null, gender char(1) not null, mobile numeric not null, date_ date not null, train_no varchar(25) not null, coach_no varchar(25) not null, seat_no numeric not null, from_station varchar(25) not null, to_station varchar(25) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
create table if not exists t_schedule(station_id varchar(25) not null, station_name varchar(25) not null, platform_no numeric not null, train_no varchar(25) not null, arrival timestamp not null, departure timestamp not null, foreign key (train_no) references train_datails(train_no));

insert into train_details values("12163", "Chennai Express", "Delhi - DLI", "Chennai Central - MAS", 10, 300, 0);
insert into train_details values("12632", "Nellai Express", "Thirunelveli - TEN", "Chennai Central - MAS", 15, 450, 0);
insert into train_details values("12635", "Nellai Express", "Chennai Central - MAS", "Madurai Jn - MDU", 10, 300, 0);
insert into train_details values("16859", "Mangalore Express", "Chennai Central - MAS", "Mangalore Central - MAQ", 15, 450, 0);

select * from train_details;
