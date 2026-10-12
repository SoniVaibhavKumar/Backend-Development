// Node.js Basics
// Introduction to Node.js
// Installing Node.js and npm
// Working with mosules
// File system operations
// Understanding HTTP module


// Nodejs is js runtime environment
// npm - package store(people upload diff packages here which do diff things we can use them if we want)





// File System Operations


// const fs = require('fs');

// fs.writeFile("hey.txt", "hey hello how are you", function(err) {
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", " Everything Good", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy.txt", function(err) {
//     if(err) console.error(er.message);
//     else console.log("done");
// })

// fs.unlink("copy.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rm     // to delete folders




// HTTP module
// http - protocol (without following this rules cant send or get anything from the internet/browser)


// const http = require('http');

// const server = http.createServer(function(req, res) {
//     res.end("hello world");
// })
// server.listen(3000);


// install - npm i packagename
// uninstall - npm uninstall packagename
// dependencies - packages which are dependent on other packages
// devdependencies - packages which are useful only in development
// devdependencies - npm i packagename --save-dev


// Express.js - A npm package, framework(a flow)
// manages everything from receiving the request and giving the response


// Routing

// const express = require('express')
// const app = express();
// app.get("/", function(req, res) {
//     res.send("Champion");
// });
// app.get("/profile", function(req, res) {
//     res.send("Champions");
// });
// app.listen(3000);




// Middleware - when request is traveling and we stop to perform something
// Middleware are present before routes

// const express = require('express');
// const app = express();
// app.use(function(req, res, next) {
//     console.log("middleware");
//     next();
// });
// app.get("/", function(req, res) {
//     res.send("Champions");
// })
// app.listen(3000);



// Form Handling
// session cookie

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express,express.urlencoded({ extended: true}));


