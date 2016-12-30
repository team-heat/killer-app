/* globals Promise*/

'use strict';

module.exports = function({ ItemListing }) {

  const availableModelProperties = [
    'make',
    'model',
    'year',
    'price',
    'pictures',
    'offers',
    'exteriorColor',
    'interiorColor',
    'engineTorque',
    'enginePower',
    'history',
    'pictures'
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

  function getAll() {
    return new Promise((resolve, reject) => {
      ItemListing.find((err, listings) => {
        if (err) {
          return reject(err);
        }
        return resolve(listings);
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

  function addOfferToItemListing(offer) {
    const offerForAdd = {
      'username': offer.username,
      'offeredPrice': offer.offeredPrice,
      'status': 'active'
    }

    return new Promise((resolve, reject) => {
      getItemListingById(offer.id)
        .then(itemListing => {
          itemListing.offers.push(offerForAdd);

          itemListing.save(err => {
            if (err) {
              reject(err);
            } else {
              resolve(itemListing);
            }
          })
        }).catch(reject);
    })
  }

  function addCommentToItemListing(listingId, comment) {
    return new Promise((resolve, reject) => {
      getItemListingById(listingId)
        .then(itemListing => {
          itemListing.comments.push(comment);

          itemListing.save(err => {
            if (err) {
              reject(err);
            } else {
              resolve(itemListing);
            }
          })
        }).catch(reject);
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
    getAll,
    createItemListing,
    getItemListingById,
    addOfferToItemListing,
    addCommentToItemListing,
    filterItemListingWithOptions
  };
};