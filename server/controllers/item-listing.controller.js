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

  return {
    index,
    details,
    createListing
  };
};