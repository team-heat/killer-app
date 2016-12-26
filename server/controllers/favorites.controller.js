'use strict';

module.exports = function ({userData, itemListingData}) {
  function index(req, res) {
    res.status(200).json(req.user.favorites);
  }

  function create(req, res) {
    const loggedUser = req.user;   
    const itemListingId = req.body.id;
    return itemListingData.getItemListingById(itemListingId)
      .then((listing) => {
        if (!listing) {
          throw new Error('Listing with this ID not found.'); 
        }
        loggedUser.favorites.push(listing);
        return userData.updateUser(loggedUser);        
      })
      .then(() => {
        res.status(200).json({message: 'Successfully added listing.'});        
      })
      .catch((err)=>{
        return res.status(400).json({message: err.message});
      });
  }

  return {
    index,
    create
  };
};