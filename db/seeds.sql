create table houses (
    id serial primary key, 
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
);

insert into houses (name, address, city, state, zip)
values 
    ('Shack', '123 East Main Street', 'Anytown', 'UT', 84000),
    ('2 Bedroom', '4100 Chapel Ridge Road', 'Someplace', 'UT', 84000);