# LIRI Bot Node App

Meet SIRI's distant cousin, LIRI! LIRI is a Language Interpretation and Recognition Interface that can give you details and information for concerts, songs, and movies.

### **Full Demo:** [Link](https://youtu.be/E15qU5ZDIUk)

## How It Works

LIRI is a command line node app that takes in User inputted parameters and displays data from APIs. LIRI can "understand" the following commands:
* **concert-this** *artist/band name* --> displays upcoming concert of artist/band
* **spotify-this-song** *song title* --> displays song information
* **movie-this** *movie title* --> displays movie details
* **do-what-it-says** --> reads from a text file and runs respective function

**Full Demo:** [Link](https://youtu.be/E15qU5ZDIUk)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/1-commands.JPG)

**'concert-this' command line input:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/2-concert-this.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/2-concert-this.JPG)

**'concert-this' default:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/3-concert-this-default.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/3-concert-this-default.JPG)

**'spotify-this-song' command line input:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/4-spotify-this-song.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/4-spotify-this-song.JPG)

**'spotify-this-song' default:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/5-spotify-this-song-default.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/5-spotify-this-song-default.JPG)

**'movie-this' command line input:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/6-movie-this.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/6-movie-this.JPG)

**'movie-this' default:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/7-movie-this-default.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/7-movie-this-default.JPG)

**'do-what-it-says' command line input:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/8-do-what-it-says.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/8-do-what-it-says.JPG)

**Easter Egg: 'say-hi' command line input:** [demo](https://github.com/kmalillos/liri-node-app/blob/master/assets/gif/9-say-hi.gif)

![image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images/9-say-hi.JPG)

## Developer Notes

### Tools Used:
* Node.js
    - File System (fs)
* NPMs - *all NPMs*
    - Axios
    - Moment
    - Node Spotify API
    - DotEnv
* APIs
    - Bands In Town API
    - Spotify API
    - OMBD API

### Node.js

* **process.argv[]** is used to access and capture the command line user inputs. The command line user inputs are stored in variables 'command' and 'search' to be later used in the functions and the main process.

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/node-code-1.JPG)

The 'command' variable is used in the main process to call a particular function using 'If-Else Statements.'

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/node-code-2.JPG)

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/node-code-3.JPG)

The 'search' variable is used in the API request.

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/node-code-4.JPG)

* **File System(fs)** ([Link](https://nodejs.org/api/fs.html)) is built into Node.js and is used to read the file of 'random.txt' in the 'doThis()' function that is triggered by the 'do-what-it-says' command.

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/fs-code-1.JPG)

![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/fs-code-2.JPG)

### NPM's:

* 'package.json' was created using command 'npm init' to save all NPMs and dependencies.

* Then, all NPMs were installed using command 'npm install <npm package here>'.

* NPMs were accessed in JavaScript file with a "require" function.

* **Axios NPM**  ([Link](https://www.npmjs.com/package/axios)) is used to make a .get and .then request from an external API. 

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/axios-code-1.JPG)

    - It is used here to access: Bands in Town API for the 'concertThis()' function that is triggered by the 'concert-this' command,

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/axios-code-2.JPG)

    - and OMBD API for the 'movieThis()' function that is triggered by the 'move-this' command.

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/axios-code-3.JPG)

* **Moment NPM**  ([Link](https://www.npmjs.com/package/moment)) is used to reformat dates. It is used here 'concertThis()' function to reformat the dates in the Bands In Town API to: MM/DD/YYYY.

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/moment-code-1.JPG)

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/moment-code-2.JPG)

* **Node Spotify NPM**  ([Link](https://www.npmjs.com/package/node-spotify-api)) enables the use of the API library for the Spotify REST API.

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/spotify-code-1.JPG)

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/spotify-code-2.JPG)

* **DotEnv NPM**  ([Link](https://www.npmjs.com/package/dotenv)) loads environment variables from a .env file into process.env, storing configuration in the environment separate from code. This is used to access hidden Spotify API keys.

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/dotenv-code-1.JPG)

    ![Image](https://github.com/kmalillos/liri-node-app/blob/master/assets/images_2/dotenv-code-2.JPG)

## Contributor

### Kaylah Malillos

**About the Developer:** [Link](https://kmalillos.github.io/)


