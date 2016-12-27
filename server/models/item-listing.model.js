'use strict';

const mongoose = require('mongoose');

const itemListingSchema = new mongoose.Schema({
  owner: String,
  make: String,
  model: String,
  year: String,
  price: Number,
  pictures: string[],
  exteriorColor: String,
  interiorColor: String,
  engineTorque: Number,
  enginePower: Number,
  history: String,
  createdOn: Date,
  isActive: Boolean
});

let ItemListing;
itemListingSchema.static('createItemListing', function (listing) {
  return new ItemListing({
    owner: listing.owner,
    make: listing.make,
    model: listing.model,
    year: listing.year,
    price: listing.price,
    pictures: string[],
    exteriorColor: listing.exteriorColor,
    interiorColor: listing.interiorColor,
    engineTorque: listing.engineTorque,
    enginePower: listing.enginePower,
    history: listing.history,
    createdOn: new Date(),
    isActive: true
  });
});

mongoose.model('ItemListing', itemListingSchema);
ItemListing = mongoose.model('ItemListing');

module.exports = function ({}) {
  return ItemListing;
};