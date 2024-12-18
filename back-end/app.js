const path = require("path");
const express = require("express");
const { error } = require("console");
const app = express();

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.render('/movie', {
        error: "Not a real movie"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anthony Montesdeoca',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anthony Montesdeoca',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log("Server is running on" + port);
})