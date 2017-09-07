'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
fs.readFile('listings.json', "utf8", function(err, data){
  if(err){
     throw err;
  }
  var listingsData = JSON.parse(data);
  Listing.insertMany(listingsData.entries, function(err1, result) {
    if (err1) {
      throw err1;
    }
  });
  mongoose.disconnect();
})



/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
