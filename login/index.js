// const express = require('express')
// const mysql = require('mysql')


// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '11234',
//     database: 'movieDB'
// })


// db.connect(err => {
//     if(err) {
//         throw err
//     }
//     console.log("Database connected")
// })

// const app = express()

// app.get('/createdb', (req, res)=> {
//     let sql = 'create database movieDB';
//     db.query(sql, (err) => {
//         if(err){
//             throw err;
//         }
//         res.send("Database Created")
//     })
// })

// //create table
// app.get('/createreg', (req, res) => {
//     let sql = 'create table reg(name varchar(50), email varchar(50), password varchar(50), primary key(email))';
//     db.query(sql, err=> {
//         if(err) {
//             throw err
//         }
//         res.send('registration table created')    
//     })
// })

// app.listen('4000', () => {
//     console.log('server started at 4000');
// })

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 4000;

// // Create MySQL connection
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'your_user',
//   password : 'your_password',
//   database : 'your_database'
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database!');
// });

// // Set up body-parser middleware to parse incoming HTML form data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Define a route to handle the incoming HTML form data
// app.post('/submit-data', (req, res) => {
//   const { name, email, message } = req.body;
  
//   // Insert the data into the MySQL database
//   const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
//   db.query(sql, [name, email, message], (err, result) => {
//     if (err) throw err;
//     console.log('Data inserted into MySQL database!');
//   });
  
//   res.send('Data received and stored in MySQL database!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 4000;

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

app.get("/reg", function(req, res){
        res.sendFile(__dirname + "/register.html");
    })

// Define a route to handle the incoming HTML form data
app.post('/reg', (req, res) => {
const {name, email, pass} = req.body;

  //check if a user with the same email alreaay exits
  const sql = 'SELECT * FROM reg WHERE email = ?';
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    
    if (result.length > 0) {
      // An existing user with the same email was found
      res.send('You are already registered. Please log in instead.');
    } else {
      // Insert the new user into the database
      const sql = 'INSERT INTO reg (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, pass], (err, result) => {
        if (err) throw err;
        console.log('registration successful !');
  });
  res.sendFile(__dirname + "/success.html")
    }
  });
});
  
//   res.sendFile(__dirname + "/success.html")


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});