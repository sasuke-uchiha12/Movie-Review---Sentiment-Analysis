// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static((__dirname, 'public')));

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/avatar_rev.html");
// })

// app.post("/", function(req, res){
//     const rev = req.body.rev;
//     console.log(rev);
    
// })




// app.listen(3000, function(){
//     console.log("server is running on port 3000");
// });

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '11234',
  database : 'movieDB'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Set up body-parser middleware to parse incoming HTML form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static((__dirname, 'public')));
app.use(bodyParser.json());

app.get("/", function(req, res){
        res.sendFile(__dirname + "/avatar_rev.html");
    })

// Define a route to handle the incoming HTML form data
app.post('/', (req, res) => {
  const {rev} = req.body;
  
  // Insert the data into the MySQL database
  const sql = 'INSERT INTO rev (review) VALUES (?)';
  db.query(sql, [rev], (err, result) => {
    if (err) throw err;
    console.log('Data inserted into MySQL database!');
  });
  
  res.sendFile(__dirname + "/success.html")
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

