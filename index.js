var express = require('express');
var staticZip = require('express-static-zip');
 
// path to zip
var zipPath = './views/complete.zip' ; 
// path where the unzipped files would live
var libPath = '/models/ldraw/officialLibrary/'; 
// dive into the zip file
var zipRoot = 'ldraw/'; 

var app = express();
var port = process.env.PORT || 3000;

// remap models path, to match with three.js example
app.use( libPath + 'models/', express.static('public/models'));

// serve parts from the zip
app.use(libPath, staticZip(zipPath, { zipRoot: zipRoot }));

// serve public files from a static dir
app.use('/', express.static('public'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});