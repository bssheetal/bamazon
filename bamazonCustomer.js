var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
    
});

function start() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) {
            throw err
        };
        console.table(response);
        placeorder();
    });
}

function placeorder() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the ID of the product you would like to buy?",
            name: "productid"
        },
        {
            type: "input",
            message: "How many would you like to buy?",
            name: "quantity"
        }
    ]).then(function (response) {

       
        console.log(response.productid);
        console.log(response.quantity);

    });
}