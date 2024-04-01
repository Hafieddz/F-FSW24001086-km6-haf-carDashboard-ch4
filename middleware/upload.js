const multer  = require('multer');
const formatFilename = require('../utils/formatFilename');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '_' +  formatFilename(file.originalname));
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Hanya file PNG dan JPG yang diperbolehkan!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, 
  fileFilter
});

module.exports = upload