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
        connection.end();
    });
}

function viewlowinventory() {
    connection.query("select * from products where stock_quantity < 5", function (err, res) {
        if (err) {
            throw err;
        }

        console.table(res);
        connection.end();
    });
}

function addinventory() {

    inquirer.prompt([

        {
            type: "input",
            message: "Which item do you want to add more",
            name: "itemid"
        },
        {
            type: "input",
            message: "How many do you want to add more",
            name: "itemquantity"
        }
    ]).then(function (addorderresponse) {
        var id = parseInt(addorderresponse.itemid);
        var quantitytobeadded = parseInt(addorderresponse.itemquantity);
        connection.query("SELECT * FROM products WHERE ?",
            [
                {
                    item_id: id
                }
            ], function (err, data) {
                if (err) {
                    throw err;
                }

                var q = data[0];
                connection.query("UPDATE products SET ? WHERE ?",
                    [{
                        stock_quantity: q.stock_quantity + quantitytobeadded,

                    },
                    {
                        item_id: id
                    }
                    ],

                    function (err, res) {

                        if (err) {
                            throw err;
                        }

                        console.log("Product has been added");
                        connection.end();

                    }
                )


            })
    });
}

function addnewproduct() {

    inquirer.prompt([

        {
            type: "input",
            message: "Enter the new item you want to add",
            name: "itemname"
        },
        {
            type: "input",
            message: "How many do you want to add",
            name: "itemquantity"
        },
        {
            type: "input",
            message: "Which department?",
            name: "dname"
        },
        {
            type: "input",
            message: "Price of the item",
            name: "itemprice"
        }
    ]).then(function (addnpresponse) {
        var pname = addnpresponse.itemname;
        var quantitytobeadded = parseInt(addnpresponse.itemquantity);
        var deptname = addnpresponse.dname;
        var prodprice = addnpresponse.itemprice;

        connection.query("INSERT INTO products SET ? ",
            {
                product_name: pname,
                department_name: deptname,
                price: prodprice,
                stock_quantity: quantitytobeadded
            },

            function (err, res) {

                if (err) {
                    throw err;
                }

                console.log("New Product has been added");
                connection.end();

            }
        )



    });

}

function viewproducts() {

}