// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
         console.log("DOWNLOADING IMAGE!")                        // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message:', response.statusMessage);
         console.log('Response Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function (response) {
         console.log("Download complete.");
      });