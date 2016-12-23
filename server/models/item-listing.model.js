'use strict';

const mongoose = require('mongoose');

const itemListingSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  price: Number,
  exteriorColor: String,
  interiorColor: String,
  engineTorque: Number,
  enginePower: Number,
  history: String
});

let ItemListing;
itemListingSchema.static('createItemListing', function (listing) {
  return new ItemListing({
    make: listing.make,
    model: listing.model,
    year: listing.year,
    price: listing.price,
    exteriorColor: listing.exteriorColor,
    interiorColor: listing.interiorColor,
    engineTorque: listing.engineTorque,
    enginePower: listing.enginePower,
    history: listing.history
  });
});

mongoose.model('ItemListing', itemListingSchema);
ItemListing = mongoose.model('ItemListing');

module.exports = function ({}) {
  return ItemListing;
};