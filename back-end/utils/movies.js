const request = require("request");

function getMovies(movieSearch, callback) {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(movieSearch) + '&include_adult=false&language=en-US&page=1';
    const options = {
        url,
        json: true,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWRjNThlN2Q1ODczZDM4ZWYzMTVhZDc2ZWNkNjBiZiIsIm5iZiI6MTczNDQ2MzM0OS4wNDcwMDAyLCJzdWIiOiI2NzYxY2Y3NWE3YWRlYWU3YWMyNTRlNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sfhQTU2znnK4Ib0k0n2UxZ-vHtr9uIc_SM3foDMIXBE'
        }
    };
    request(options, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.statusCode != 200) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = getMovies