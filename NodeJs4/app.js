const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get("/", (req, res) => {
    res.send("hey");
})

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "Satundue",
        email: "sattuder@gmail.com",
        username: "@sattuder"
    });
    res.send(createdUser);
})

app.get("/update", async (req, res) => {
    let updateUser = await userModel.findOneAndUpdate({username: "@sattu"}, {name: "Satinder"}, {new: true})
    res.send(updateUser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "@sattuder"});
    res.send(users);
})

app.listen(3000);