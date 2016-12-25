'use strict';

module.exports = function ({itemListingData}) {

  function index(req, res) {
    res.status(200).json({ message: 'GET /api/gallery' });
  }

  function details(req, res) {
    res.status(200).json({ message: 'GET /api/gallery/:id' });
  }

  function createListing(req, res) {
    res.status(200).json({ message: 'POST /api/gallery/' });
  }

  function submitOfferForListing(req, res) {
    res.status(200).json({ message: 'POST /api/gallery/:id' });
  }

  return {
    index,
    details,
    createListing,
    submitOfferForListing
  };
};