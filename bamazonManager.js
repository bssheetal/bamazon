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
    afterConnection();

});

function afterConnection() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            name: "options"
        }


    ]).then(function (response) {
        switch (response.options) {
            case "View Products for Sale":
                viewproductsforsale();
                break;
            case "View Low Inventory":
                viewlowinventory();
                break;
            case "Add to Inventory":
                addinventory();
                break;
            case "Add New Product":
                addnewproduct();
                break;
        }



    });
}

function viewproductsforsale() {
    connection.query("select * from products", function (err, res) {
        if (err) {
            throw err;
        }

        console.table(res);
    });
}

function viewlowinventory() {
    connection.query("select * from products where stock_quantity < 5", function (err, res) {
        if (err) {
            throw err;
        }

        console.table(res);
    });
}

function addinventory() {

}

function addnewproduct(){
    
}