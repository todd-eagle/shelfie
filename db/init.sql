create table if not exists products 
(
    id serial primary key,
    name varchar(25),
    price integer,
    img text
)