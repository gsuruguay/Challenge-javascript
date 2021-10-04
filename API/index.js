const express = require("express");
const mysql = require('mysql');
const myConnection = require("express-myconnection");
const utils = require("./utils");

const app = express();

require('dotenv').config();

app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}, 'single'))

//Settings
app.set("port", process.env.PORT || 3333)

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get("/", (req, res) => {
    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query('SELECT id, concept, amount, date, type FROM operations ORDER BY id DESC', (err, operations) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error consulting the database',
                    err
                })
            }

            let amountOperations = operations.reduce((count, elem) => {
                count[elem.type] = (count[elem.type] || 0) + elem.amount
                return count
            }, {});
            let balance = amountOperations.entry - amountOperations.egress;

            //It only shows 10 operations
            let limitOperations = (operations.length > 10) ? operations.slice(0, 10) : operations;

            res.json({
                allOperations: operations,
                limitOperations,
                amountOperations,
                balance
            })
        })
    })
})

app.post("/createOperation", (req, res) => {
    const newOperation = req.body;
    if (!utils.isValidFormCreate(newOperation)) {
        res.status(400).json({
            msg: "The form contains incorrect data"
        })
    } else {
        req.getConnection((error, connection) => {
            if (error) {
                res.status(500).send('Connection error');
                return
            }
            connection.query('INSERT INTO operations SET ?', newOperation, (err, operation) => {
                if (err) {
                    res.status(400).json({
                        msg: 'There was an error saving the operation',
                        err
                    })
                    return
                }
                res.status(200).json({
                    msg: 'Operation saved successfully'
                })
            })
        })
    }
})

app.put("/setOperation/:id", (req, res) => {
    const { id } = req.params
    const setOperation = req.body

    if (!utils.isValidFormUpdate(setOperation)) {
        res.status(400).json({
            msg: "The form contains incorrect data"
        })
    } else {
        req.getConnection((error, conn) => {
            if (error) {
                res.status(500).send('Connection error')
                return
            }
            conn.query('UPDATE operations set ? where id = ?', [setOperation, id], (err, operation) => {
                if (err) {
                    res.status(400).json({
                        msg: 'There was an error modifying the operation',
                        err
                    })
                    return
                }
                res.status(200).json({
                    msg: 'Successfully modified operation'
                })
            })
        })
    }
})

app.delete("/deleteOperation/:id", (req, res) => {
    const { id } = req.params

    req.getConnection((error, conn) => {
        if (error) {
            res.status(500).send('Connection error')
        }
        conn.query("DELETE FROM operations WHERE id = ?", id, (err, operation) => {
            if (err) {
                res.status(400).json({
                    msg: 'There was an error deleting the operation',
                    err
                })
            }
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