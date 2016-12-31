'use strict';

module.exports = function ({ itemListingData }) {

  function index(req, res) {
    return itemListingData.getAll()
      .then((listings) => {
        if (!listings) {
          throw new Error('No items available');
        }
        return shuffle(listings);
      })
      .then((shuffledListings) => {
        res.status(200).json(shuffledListings);
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

  function shuffle(items) {
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    // -- To shuffle an array a of n elements (indices 0..n-1):
    // for i from n−1 downto 1 do
    //   j ← random integer such that 0 ≤ j ≤ i
    //   exchange a[j] and a[i]
    const itemsLength = items.length;
    for (let itemIndex = itemsLength - 1; itemIndex >= 0; itemIndex -= 1) {
      const exchangeIndex = getRandomInt(0, itemIndex);
      const temp = items[exchangeIndex];
      items[exchangeIndex] = items[itemIndex];
      items[itemIndex] = temp;
    }
    return items;
  }

  // http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  // * Returns a random integer between min (inclusive) and max (inclusive)
  //  * Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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