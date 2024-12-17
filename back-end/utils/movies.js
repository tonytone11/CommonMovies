const require = require("request");

function getMovies(movieSearch, callback) {
    const url = 'https://api.themoviedb.org/3/search/movie?query=300&include_adult=false&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWRjNThlN2Q1ODczZDM4ZWYzMTVhZDc2ZWNkNjBiZiIsIm5iZiI6MTczNDQ2MzM0OS4wNDcwMDAyLCJzdWIiOiI2NzYxY2Y3NWE3YWRlYWU3YWMyNTRlNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sfhQTU2znnK4Ib0k0n2UxZ-vHtr9uIc_SM3foDMIXBE'
        }
    };
}