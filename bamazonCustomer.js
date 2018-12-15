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

//connect to database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();

});

//after connecting to DB run the query to view products
function start() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) {
            throw err
        };
        console.table(response);
        placeorder();


    });
}


//place the order 
function placeorder() {


    inquirer.prompt([
        {
            type: "input",
            message: "What's the ID of the product you would like to buy?",
            name: "productid"
        },
        {
            type: "input",
            message: "How many would you like to buy?(Quit with q)",
            name: "quantitybought"
        }
    ]).then(function (placeorderresponse) {


        if (placeorderresponse.quantitybought === "q") {
            console.log("Thanks for shopping with us!See you soon!")
            connection.end();
        }

        else if (!isNaN(placeorderresponse.productid || placeorderresponse.quantitybought)) {
            var id = parseInt(placeorderresponse.productid);
            var quantitybought = parseInt(placeorderresponse.quantitybought);
            product(id, quantitybought);
        }
        else if (isNaN(placeorderresponse.productid)) {
            console.log("Invalid no");
            connection.end();
        }




    });
}


function product(id, quantitybought) {
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
            if (quantitybought > q.stock_quantity) {
                console.log("Insufficient quantity! product out of stock.You can order something else");
                placeorder();
            }
            if (quantitybought <= q.stock_quantity) {
                console.log("Product is in stock");

                buyProduct(q, id, quantitybought);

            }


        })
};

function buyProduct(q, id, quantitybought) {
    connection.query("UPDATE products SET ? WHERE ?",
        [{
            stock_quantity: q.stock_quantity - quantitybought,

        },
        {
            item_id: id
        }
        ],

        function (err, res) {

            if (err) {
                throw err;
            }

            console.log("Product has been purchased and your price is" + " " + q.price * quantitybought + "$");
            placeorder();

        }
    )
};

