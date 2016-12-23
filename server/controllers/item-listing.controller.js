'use strict';

module.exports = function ({itemListingData}) {

  function index(req, res) {
    res.status(200).send('GET /api/gallery');
  }

  function details(req, res) {
    res.status(200).send('GET /api/gallery/:id');
  }

  function createListing(req, res) {
    res.status(200).send('POST /api/gallery/');
  }

  return {
    index,
    details,
    createListing
  };
};