Description:
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package.This has Customer and Manager interfaces implemented from different user perspectives

Database SetUp:
Install MYSQL.Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in bamazonseed.sql. Run this code inside using MySQL client , then you will be ready to proceed with running the Bamazon customer and manager interfaces.

Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted with Insufficient quanity message and prevents the order from going through.

To run the customer interface please follow the steps below:

git clone git@github.com:bssheetal/bamazon.git
cd bamazon
npm install
node bamazonCustomer.js

Manager Interace
The manager interface presents a list of four options, as below.
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product

View Products for Sale, allows the user to view inventory for every every available item: the item IDs, names, prices, and quantities.
View Low Inventory, shows the user all items with an inventory count lower than five.
Add to Inventory,  allows user your to "add more" of any item currently available in the store.
Add New Product, allowd the manager to add a completely new product to the store.

To run the Manager interface please follow the steps below:

git clone git@github.com:bssheetal/bamazon.git
cd bamazon
npm install
node bamazonManager.js

BamazonDemo