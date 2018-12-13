DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;
CREATE TABLE products(

item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255),
department_name VARCHAR(255),
price DECIMAL(10,4),
stock_quantity INTEGER(10),
PRIMARY KEY(item_id)
);

select * from products;

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Finish dishwasher Gelpacks","Health & Household",10.95,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Philips Soft White Bulb","Health & Household",11.46,50);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Tea Tree Oil FotSoak","Health & Nutrition",12.95,100);
