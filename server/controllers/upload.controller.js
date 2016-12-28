'use strict';

module.exports = function ({}) {
  function createFile(req, res) {
    console.log(req.files);
    req.files.file.mv('./uploads/test.jpg', function (err) {
      console.log(err);
    });
    res.status(200).send({ message: 'POST /api/upload' });
  }

  return {
    createFile
  };
};
