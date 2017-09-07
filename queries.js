/* Fill out these functions using Mongoose queries*/

var Listing = require('./ListingSchema.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fs = require('fs');
var config = require('./config.js');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.find({name: 'Library West'}, function(err, listing) {
    if (err) {
      throw err;
    }
    console.log(listing);
  });
};

var removeCable = function() {
  Listing.findOneAndRemove({code: 'CABL'}, function(err, listing){
    if (err) {
      throw err;
    }
    console.log(listing);
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: 'Phelps Lab, Gainesville, FL 32603, United States'}, function(err, listing){
    if (err) {
      throw err;
    }
    console.log(listing);
  });
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listing) {
    if (err) {
      throw err;
    }
    console.log(listing);
    mongoose.disconnect();
  });
  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
