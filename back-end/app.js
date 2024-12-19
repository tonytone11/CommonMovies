const path = require("path");
const express = require("express");
const getMovies = require("./utils/movies");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../front-end/public');
const viewsPath = path.join(__dirname, '../front-end/public/view');

app.get('/', (req, res) => {
    res.send("aa")
})

app.get("/movie", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "Something went wrong"
        })
        return;
    }

    app.get('/movie/*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'Anthony Montesdeoca',
            errorMessage: 'Movie not found.'
        })
    })

    getMovies(req.query.search, (error, data) => {
        if (error) {
            res.send({
                error: "Something went wrong"
            })

            return;
        }

        res.send(data);
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
    console.log("Server is running on " + port);
})
