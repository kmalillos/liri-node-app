// for Spotify Key
require("dotenv").config();

// =================================================================================================================================
// GLOBAL VARIABLES
// =================================================================================================================================

var command = process.argv[2];
var search = process.argv.slice(3).join("+");

// npm for concert-this and movie-this
var axios = require("axios");

// npm for spotify-this-song
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);


// =================================================================================================================================
// FUNCTIONS
// =================================================================================================================================

// concert-this command
function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log(response);
        }
    );
};

// spotify-this-song command
function spotifyThis() {

    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}

// movie-this command
function movieThis() {
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    //console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            
            // console.log(response.data);
            var movie = response.data; 
            
            console.log(`Title: ${movie.Title} \nYear: ${movie.Year} \nIMBD Rating: ${movie.Ratings[0].Value} \nRotten Tomatoes Rating: ${movie.Ratings[1].Value} \nCountry: ${movie.Country} \nLanguage: ${movie.Language} \nPlot: ${movie.Plot} \nActors: ${movie.Actors}`);
        }
    );
};


// =================================================================================================================================
// MAIN PROCESS
// =================================================================================================================================

if (command == "concert-this") {
    concertThis();
// } else if (command == "spotify-this-song") {
//     spotifyThis()
} else if (command == "movie-this") {
    movieThis();    
} else {
    console.log("LIRI does not understand the command.")
}
