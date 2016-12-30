'use strict';

module.exports = function({ itemListingData }) {

  function index(req, res) {
    return itemListingData.getAll()
      .then((listings) => {
        if (!listings) {
          throw new Error('No items available');
        }
        res.status(200).json(listings);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }

  function details(req, res) {
    const listingId = req.params.id;
    return itemListingData.getItemListingById(listingId)
      .then((listing) => {
        if (!listing) {
          throw new Error('Listing not found.');
        }

        return res.status(200).json(listing);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }

  function createListing(req, res) {
    let newListing = req.body;
    newListing.owner = req.user.username;
    return itemListingData.createItemListing(newListing)
      .then(() => {
        res.status(200).json({ message: 'POST /api/gallery/' });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }

  function updateListing(req, res) {
    res.status(200).json({ message: 'PUT /api/gallery/:id' });
  }

  function submitOfferForListing(req, res) {
    let newOffer = req.body;
    newOffer.username = req.user.username;
    return itemListingData.addOfferToItemListing(newOffer)
      .then(itemListing => {
        if (!itemListing) {
          throw new Error('Listing not found.');
        }

        res.status(200).json(itemListing);
      })
      .catch(err => {
        res.status(400).json({ message: err.message });
      })
  }

  function addCommentToListing(req, res) {
    const listingId = req.params.id;

    // return itemListingData.addCommentToItemListing()
    //   .then(itemListing => {

    //   })
  }

  return {
    index,
    details,
    createListing,
    updateListing,
    addCommentToListing,
    submitOfferForListing
  };
};