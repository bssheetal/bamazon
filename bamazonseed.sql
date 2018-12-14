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

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Finish dishwasher Gelpacks","Health & Household",10.95,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Philips Soft White Bulb","Health & Household",11.46,50);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Tea Tree Oil FootSoak","Health & Nutrition",12.95,100);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Blink Security Camera","Electronics",90,100);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("HeadFirst Javascript","Books",52,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("HeadFirst Java","Books",52,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Logitech Mouse","Electronics",10,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Logitech Keyboard","Electronics",10,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Upper Bounce Trampolines","Sports & Fitness",69.74,10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Puma Golf Shoes","Sports & Fitness",86,10);



select * from products;

