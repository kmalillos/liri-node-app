// axios npm for concert-this and movie-this functions/commands
var axios = require("axios");

// moments npm for concert-this function/command
var moment = require("moment");

// spotify npm for spotify-this-song function/command
var Spotify = require('node-spotify-api');

// for spotify npm
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// file system for do-what-it-says function/command
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
            var artist = process.argv.slice(3).join(" ");
            var concert = response.data;

            //console.log(concert.length)

            if (concert.length > 5) {
                for (var i = 0; i < 5; i++) {
                    console.log(`\n******************************************************`)
                    console.log(`\nArtist/Band: ${artist} 
                        \nVenue: ${concert[i].venue.name} 
                        \nLocation: ${concert[i].venue.city}, ${concert[i].venue.region}
                        \nDate: ${moment(concert[i].datetime).format("MM/DD/YYYY")}`)
                    // Date of the Event (use moment to format this as "MM/DD/YYYY")
                };
                console.log(`\n******************************************************`)
            } else {
                for (var i = 0; i < concert.length; i++) {
                    console.log(`\n******************************************************`)
                    console.log(`\nArtist/Band: ${artist} 
                        \nVenue: ${concert[i].venue.name} 
                        \nLocation: ${concert[i].venue.city}, ${concert[i].venue.region}
                        \nDate: ${moment(concert[i].datetime).format("MM/DD/YYYY")}`)
                    // Date of the Event (use moment to format this as "MM/DD/YYYY")
                };
                console.log(`\n******************************************************`)
            }
        }
    );
};

// spotify-this-song command
// ***TO ADD "THE SIGN" DEFAULT***
function spotifyThis() {

    spotify.search({ type: 'track', query: search }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(response.tracks.items[0]); 
        var track = response.tracks.items[0];
        var song = process.argv.slice(3).join(" ");

        console.log(`\n******************************************************`)
        console.log(`\nArtist/Band: ${track.artists[0].name} 
            \nSong: ${song}
            \nSong Preview: ${track.external_urls.spotify}
            \nAlbum: ${track.album.name}`)
        console.log(`\n******************************************************`)

    });
};

// movie-this command
// ***TO ADD "MR. NOBODY" DEFAULT***
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

    fs.readFile("random.txt", "utf8", function (error, response) {

        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        //console.log(response);

        // Then split it by commas (to make it more readable)
        //.split breaks it into an array; splits at ", " (characters you want to split)
        var commandSearch = response.split(",");

        // We will then re-display the content as an array for later use.
        // console.log(commandSearch);
        // console.log(commandSearch[0]);
        // console.log(commandSearch[1]);

        command = commandSearch[0];
        search = commandSearch[1];

        console.log(command);
        console.log(search)

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
