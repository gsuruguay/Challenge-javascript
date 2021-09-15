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
    res.json({
        msg: "Este es el home"
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
})


//Starting the server
app.listen(app.get("port"), () => {
    console.log(`server on ${app.get("port")}`);
})