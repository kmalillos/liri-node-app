// axios npm for concert-this and movie-this commands
var axios = require("axios");

// moments npm for concert-this command
var moment = require("moment");

// spotify npm for spotify-this-song command
var Spotify = require('node-spotify-api');

// for spotify npm
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// file system for do-what-it-says command
var fs = require("fs");

// =================================================================================================================================
// GLOBAL VARIABLES
// =================================================================================================================================

var command = process.argv[2];
var search = process.argv.slice(3).join("+");

// =================================================================================================================================
// FUNCTIONS
// =================================================================================================================================

// concert-this command
function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    //console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {

                //console.log(typeof response)
                //console.log(response.data)
            var artist = process.argv.slice(3).join(" ").toUpperCase();
            var concert = response.data; 

            for (var i=0; i<5; i++) {
                console.log(`\n******************************************************`)
                console.log(`\nArtist/Band: ${artist} 
                \nVenue: ${concert[i].venue.name} 
                \nLocation: ${concert[i].venue.city}, ${concert[i].venue.region}
                \nDate: ${moment(concert[i].datetime).format("MM/DD/YYYY")}`)
                // Date of the Event (use moment to format this as "MM/DD/YYYY")
            };

            console.log(`\n******************************************************`)
        }
    );
};

// spotify-this-song command
function spotifyThis() {

    console.log(`spotify-this command`)

    // spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    //     if (err) {
    //         return console.log('Error occurred: ' + err);
    //     }

    //     console.log(data);
    // });
}

// movie-this command
function movieThis() {
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    //console.log(queryUrl);

    axios.get(queryUrl)
        .then(function (response) {
                // console.log(response.data);
                var movie = response.data; 

                console.log(`\n******************************************************`)
                console.log(`\nTitle: ${movie.Title} 
                \nYear: ${movie.Year} 
                \nIMBD Rating: ${movie.Ratings[0].Value} 
                \nRotten Tomatoes Rating: ${movie.Ratings[1].Value} 
                \nCountry: ${movie.Country} 
                \nLanguage: ${movie.Language} 
                \nPlot: ${movie.Plot} 
                \nActors: ${movie.Actors}`);
                console.log(`\n******************************************************`)
        })
        .catch(function (error) {
            console.log(error)
        });
};

// do-what-it-says command
function doThis() {
    console.log(`do-what-it-says command`)
}


// =================================================================================================================================
// MAIN PROCESS
// =================================================================================================================================

if (command == "concert-this") {
    concertThis();
} else if (command == "spotify-this-song") {
    spotifyThis()
} else if (command == "movie-this") {
    movieThis();   
} else if (command == "do-what-it-says") {
    doThis(); 
} else {
    console.log(`\n******************************************************`)
    console.log(`\nLIRI does not understand. \n\nLIRI can understand the following commands only: `)
    console.log(`\nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says`)
    console.log(`\n******************************************************`)
}
