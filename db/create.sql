create database if not exists rail;
use rail;
drop table if exists passenger;
drop table if exists fare_table;
drop table if exists tickets;
drop table if exists t_schedule;
drop table if exists train_details;


create table if not exists passenger(username varchar(25) primary key, aadhaar numeric unique not null, profile_name varchar(25) not null, age numeric not null, gender char(1) not null, address varchar(50) not null, mobile numeric not null, pass varchar(25) not null, mail varchar(25) not null, check(age >= 18));
create table if not exists train_details(train_no varchar(25) primary key, train_name varchar(25) not null, from_station varchar(25) not null, to_station varchar(25) not null, total_coach numeric not null, total_seats numeric not null, booked_seats numeric not null default 0);
create table if not exists fare_table(station_id varchar(25) not null, train_no varchar(25) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
create table if not exists tickets(ticket_no varchar(25) primary key, username varchar(25), profile_name varchar(25) not null, age numeric not null, gender char(1) not null, mobile numeric not null, date_ date not null, train_no varchar(25) not null, coach_no varchar(25) not null, seat_no numeric not null, from_station varchar(25) not null, to_station varchar(25) not null, fare numeric not null, foreign key (train_no) references train_details(train_no));
create table if not exists t_schedule(station_name varchar(25) not null, platform_no numeric not null, train_no varchar(25) not null, arrival timestamp not null, departure timestamp not null, foreign key (train_no) references train_details(train_no));

insert into train_details values("12163", "Chennai Express", "Delhi - DLI", "Chennai Central - MAS", 10, 300, 0);
insert into train_details values("12632", "Nellai Express", "Thirunelveli - TEN", "Chennai Central - MAS", 15, 450, 0);
insert into train_details values("12635", "Nellai Express", "Chennai Central - MAS", "Madurai Jn - MDU", 10, 300, 0);
insert into train_details values("16859", "Mangalore Express", "Chennai Central - MAS", "Mangalore Central - MAQ", 15, 450, 0);

insert into t_schedule values( "Delhi - DLI", 1, "12163", '2022-05-30 06:00:00', '2022-05-30 06:10:00'); 
insert into t_schedule values( "Delhi", 2, "12163", '2022-05-30 06:40:00', '2022-05-30 06:50:00'); 
insert into t_schedule values( "Delhi", 3, "12163", '2022-05-30 07:20:00', '2022-05-30 07:30:00'); 
insert into t_schedule values( "Delhi", 4, "12163", '2022-05-30 08:00:00', '2022-05-30 08:10:00'); 
insert into t_schedule values( "Delhi", 5, "12163", '2022-05-30 08:40:00', '2022-05-30 08:50:00'); 
insert into t_schedule values( "Delhi", 6, "12163", '2022-05-30 09:20:00', '2022-05-30 09:30:00'); 
insert into t_schedule values( "Delhi", 7, "12163", '2022-05-30 10:00:00', '2022-05-30 10:10:00'); 
insert into t_schedule values( "Delhi", 8, "12163", '2022-05-30 10:40:00', '2022-05-30 10:50:00'); 
insert into t_schedule values( "Delhi", 9, "12164", '2022-05-30 11:20:00', '2022-05-30 11:30:00');
insert into t_schedule values( "Chennai Central - MAS", 10, "12163", '2022-05-30 12:00:00', '2022-05-30 12:00:00'); 
select * from train_details;
select * from t_schedule;