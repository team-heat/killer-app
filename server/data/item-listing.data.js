/* globals Promise*/

'use strict';

module.exports = function ({ ItemListing }) {

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
    'owner',
    'isActive',
    'comments'
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
    return filterItemListingWithOptions({ isActive: true });
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
      'status': offer.status
    };

    return new Promise((resolve, reject) => {
      getItemListingById(offer.id)
        .then(itemListing => {

          // if same offer from same person already exsist and active directly resolve
          for (let i of itemListing.offers) {
            if (i.username === offer.username &&
              i.offeredPrice === offer.offeredPrice &&
              i.status === 'active') {
              resolve(itemListing);
            }
          }

          itemListing.offers.unshift(offerForAdd);

          itemListing.save(err => {
            if (err) {
              reject(err);
            } else {
              resolve(itemListing);
            }
          });
        }).catch(reject);
    });
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
          });
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

  function updateItemListing(listingForUpdate) {
    return new Promise((resolve, reject) => {
      getItemListingById(listingForUpdate._id)
        .then(listing => {

          for (const key of availableModelProperties) {
            listing[key] = listingForUpdate[key];
          }

          listing.save(err => {
            // if (err) {
            //   reject(err);
            // }

            resolve(listing);
          });

        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return {
    getAll,
    createItemListing,
    getItemListingById,
    addOfferToItemListing,
    addCommentToItemListing,
    filterItemListingWithOptions,
    updateItemListing
  };
};