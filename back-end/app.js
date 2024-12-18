const path = require("path");
const express = require("express");
const { error } = require("console");
const app = express();

const Port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.render('/movie', {
        error: "Not a real movie"
    })
})

app.listen(PORT, () => {
    console.log("Server is running on" + PORT);
})