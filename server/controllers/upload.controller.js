'use strict';

module.exports = function ({}) {
  function createFile(req, res) {
    res.status(200).send({ message: 'POST /api/upload' });
  }

  return {
    createFile
  };
};
