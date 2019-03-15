create table types
( id serial primary key,
  type_des varchar(20) not null);


create table cards 
( id serial primary key,
  type_id int not null,
  body varchar(200) not null,
constraint fk_cards_type foreign key (type_id) references types (id));


create table people
( id serial primary key
  ,fname varchar(50) not null
  ,lname varchar(50) not null
  ,key varchar(50) not null);
