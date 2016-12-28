'use strict';

const fs = require('fs');

module.exports = function ({}) {
  const ROOT_UPLOADS_DIR = './dist/uploads';

  function createFile(req, res) {
    const user = req.user;
    const userUploadsDirName = `${ROOT_UPLOADS_DIR}/${user._id}`;
    const userUploadsDirExists = fs.existsSync(userUploadsDirName);
    if (!userUploadsDirExists) {
      fs.mkdirSync(userUploadsDirName);
    }

    const userFilesCount = fs.readdirSync(userUploadsDirName).length;
    const fileExtension = getFileTypeExtension(req.files.file.mimetype);
    if (!fileExtension) {
      return res.status(400).json({ message: 'Incorrect file type' });
    }

    const imageUrl = `${userUploadsDirName}/${userFilesCount}${fileExtension}`;
    return req.files.file.mv(imageUrl, function (err) {
      if (err) {
        console.log(err);
      }
      res.status(200).send({ imageUrl: `/uploads/${user._id}/${userFilesCount}${fileExtension}` });
    });
  }

  function getFileTypeExtension(mimetype) {
    let fileExtension = '';
    if (mimetype.indexOf('jpeg') >= 0) {
      fileExtension = '.jpg';
    } else if (mimetype.indexOf('png') >= 0) {
      fileExtension = '.png';
    }
    return fileExtension;
  }

  return {
    createFile
  };
};
