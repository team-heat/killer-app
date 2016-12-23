/* globals Promise*/

'use strict';

module.exports = function ({ItemListing}) {

  const availableModelProperties = [
    'make',
    'model',
    'year',
    'price',
    'exteriorColor',
    'interiorColor',
    'engineTorque',
    'enginePower',
    'history'
  ];

  function createItemListing(listing) {
    const newListing = ItemListing.createItemListing(listing);
    return new Promise((resolve, reject) => {
      newListing.save((err) => {
        if (err) {
          return reject(err);
        }
        return resolve(newListing);
      });
    });
  }

  function getItemListingById(listingId) {
    return new Promise((resolve, reject) => {
      ItemListing.findOne({
        _id: listingId
      }, (err, listing) => {
        if (err) {
          return reject(err);
        }
        return resolve(listing);
      });
    });
  }

  function filterItemListingWithOptions(options) {
    const filter = {};
    const optionsKeys = Object.keys(options);
    for (const key of optionsKeys) {
      if (availableModelProperties.indexOf(key) >= 0) {
        filter[key] = options[key];
      }
    }

    return new Promise((resolve, reject) => {
      ItemListing.find(filter, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }

  return {
    createItemListing,
    getItemListingById,
    filterItemListingWithOptions
  };
};