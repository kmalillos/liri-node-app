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

function concertThis() {

    // default
    if (!search) {
        search = "the+rolling+stones"
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            //console.log(typeof response)
            //console.log(response.data)
            var concert = response.data;

            //console.log(concert.length)
            // displays up to 5 songs
            if (concert.length > 5) {
                for (var i = 0; i < 5; i++) {
                    console.log(`\n******************************************************\n`)
                    console.log(`   Artist/Band: ${concert[i].lineup[0]}`)
                    console.log(`   Venue: ${concert[i].venue.name}`)
                    console.log(`   Location: ${concert[i].venue.city}, ${concert[i].venue.region}`)
                    console.log(`   Date: ${moment(concert[i].datetime).format("MM/DD/YYYY")}`)
                };
                console.log(`\n******************************************************`)
            } else {
                for (var i = 0; i < concert.length; i++) {
                    console.log(`   Artist/Band: ${concert[i].lineup[0]}`)
                    console.log(`   Venue: ${concert[i].venue.name}`)
                    console.log(`   Location: ${concert[i].venue.city}, ${concert[i].venue.region}`)
                    console.log(`   Date: ${moment(concert[i].datetime).format("MM/DD/YYYY")}`)
                };
                console.log(`\n******************************************************`)
            }
        }
    );
};

function spotifyThis() {

    //default 
    if (!search) {
        // search = "the+sign"
        search = "never+gonna+give+you+up"
    }

    spotify.search({ type: 'track', query: search }, function (err, response) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(response.tracks.items[0]);

        // displays 5 songs
        for (var i = 0; i < 5; i++) {
            var track = response.tracks.items[i];

            console.log(`\n******************************************************\n`)
            console.log(`   Artist/Band: ${track.artists[0].name}`)
            console.log(`   Song: ${track.name}`)
            console.log(`   Preview Song: ${track.external_urls.spotify}`)
            console.log(`   Album: ${track.album.name}`)
        };
        console.log(`\n******************************************************`)

    });
};

function movieThis() {

    //default 
    if (!search) {
        // search = "mr+nobody"
        search = "clueless"
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    //console.log(queryUrl);

    axios.get(queryUrl)
        .then(function (response) {
            // console.log(response.data);
            var movie = response.data;

            console.log(`\n******************************************************\n`)
            console.log(`   Title: ${movie.Title} `)
            console.log(`   Year: ${movie.Year} `)
            console.log(`   IMBD Rating: ${movie.Ratings[0].Value}`)
            console.log(`   Rotten Tomatoes Rating: ${movie.Ratings[1].Value}`)
            console.log(`   Country: ${movie.Country}`)
            console.log(`   Language: ${movie.Language}`)
            console.log(`   Plot: ${movie.Plot}`)
            console.log(`   Actors: ${movie.Actors}`)
            console.log(`\n******************************************************`)
        })
        .catch(function (error) {
            console.log(error)
        });
};

function doThis() {

    fs.readFile("random.txt", "utf8", function (error, response) {

        if (error) {
            return console.log(error);
        }

        //console.log(response);

        // Then split it by commas (to make it more readable)
        //.split breaks it into an array; splits at ", " (characters you want to split)
        var textArray = response.split(",");

        // We will then re-display the content as an array for later use.
        // console.log(textArray);

        for (var i = 0; i < textArray.length; i++) {
            // console.log(textArray[i])

            // IF index ends in even number (0,2,4,6,8), store variable as the "command"
            // ELSE index ends in odd number (1,3,5,7,9) store variable as the "search"
            if (i % 2 === 0) {
                command = textArray[i];
            } else {
                search = textArray[i]
            }

        };

        console.log(command, search);

        if (command == "concert-this") {
            concertThis();
        } else if (command == "spotify-this-song") {
            spotifyThis();
        } else if (command == "movie-this") {
            movieThis();
        } else {
            console.log(`\n******************************************************\n`)
            console.log(`   LIRI does not understand.`)
            console.log(`\n   Try these commands: `)
            console.log(`\n   concert-this\n   spotify-this-song\n   movie-this\n   do-what-it-says\n   say-hi`)
            console.log(`\n******************************************************`)
        }

    })
};

function sayHi() {
    console.log(`
                        ___             ___  _  ___   
    |_|  _  | |  _  |    | / ._ _    |   |  |_)  |  | 
    | | (/_ | | (_) o   _|_  | | |   |_ _|_ | | _|_ o
    
    `);
};

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
} else if (command == "say-hi") {
    sayHi();
} else {
    console.log(`\n******************************************************\n`)
    console.log(`   LIRI does not understand.`)
    console.log(`\n   Try these commands: `)
    console.log(`\n   concert-this\n   spotify-this-song\n   movie-this\n   do-what-it-says\n   say-hi`)
    console.log(`\n******************************************************`)
}

