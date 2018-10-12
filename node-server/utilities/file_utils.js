var Binary = require('mongodb').Binary;
var fs = require('fs')

// File Binary Utils:

exports.convertFileToBinary( filePath )
{
    var theFileData = fs.readFileSync( filePath );
    return Binary( theFileData );
}

exports.convertBinaryToFile( fileData )
{
    fs.writeFile('temp_file.gif', fileData, function(err) { if(err) { throw err } } )
}