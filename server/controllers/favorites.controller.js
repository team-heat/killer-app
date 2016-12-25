'use strict';

module.exports = function ({userData}) {
  function index(req, res) {
    res.status(200).json({ message: 'GET /api/favorites' });
  }

  function create(req, res) {
    res.status(200).json({ message: 'POST /api/favorites' });
  }

  return {
    index,
    create
  };
};