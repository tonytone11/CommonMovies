const path = require("path");
const express = require("express");
const app = express();

const Port = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on" + PORT);
})