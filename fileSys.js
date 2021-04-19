var https = require('https');
var fs = require('fs');
const url = "https://jsonplaceholder.typicode.com/posts";
const fileDestination = './result/posts.json'


function writeToFile(dataUrl, dataDestination) {
    const file = fs.createWriteStream(dataDestination);
    https.get(dataUrl, function(response) {
        response.pipe(file);

        file.on('error', function(err) {
            console.log("ERROR:" + err);
        })

        file.on('finish', function() {
            console.log('Operation successful');
        });

    })
};

writeToFile(url, fileDestination)