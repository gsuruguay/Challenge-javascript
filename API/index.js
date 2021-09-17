const express = require("express");
const mysql = require('mysql');
const myConnection = require("express-myconnection");

const app = express();

app.use(myConnection(mysql, { // A ESTO DEBO HACER VARIABLE DE ENTORNOS
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'challenge-alkemy-js'
}, 'single'))

//Settings
app.set("port", process.env.PORT || 3333)

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query('SELECT concept, amount, date, type FROM operations', (err, operations) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error consulting the database',
                    err
                })
            }
            console.log(operations)

            let amountOperations = operations.reduce((count, elem) => {
                count[elem.type] = (count[elem.type] || 0) + elem.amount
                return count
            }, {});
            let balance = amountOperations.entry - amountOperations.egress;
            console.log(amountOperations);
            console.log(balance);

            //It only shows the first 10 operations
            let limitOperations = (operations.length > 10) ? operations.slice(0,10) : operations;

            res.json({
                //operations,
                limitOperations,
                amountOperations,
                balance
            })
        })
    })
})

app.get("/operations", (req, res) => {
    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query('SELECT concept, amount, date, type FROM operations', (err, operation) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error consulting the operations',
                    err
                })
            }
            console.log(operation)
            res.json({
                operation
            })
        })
    })
})

app.post("/createOperation", (req, res) => {
    const newOperation = req.body;
})

app.put("/setOperation/:id", (req, res) => {
    const { id } = req.params
    const setOperation = req.body

    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query('UPDATE operations set ? where id = ?', [setOperation, id], (err, operation) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error modifying the operation',
                    err
                })
            }
            console.log(operation);
            res.status(200).json({
                msg: 'Successfully modified operation'
            })
        })
    })
})

app.delete("/deleteOperation/:id", (req, res) => {
    const { id } = req.params

    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query("DELETE FROM operations WHERE id = ?", id , (err, operation) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error deleting the operation',
                    err
                })
            }
            console.log(operation);
            res.status(200).json({
                msg: 'Operation removed successfully'
            })
        })
    })
})

//Starting the server
app.listen(app.get("port"), () => {
    console.log(`server on ${app.get("port")}`);
})