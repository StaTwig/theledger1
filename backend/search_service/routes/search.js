var express = require("express");
const multer = require('multer');

const SearchController = require("../controllers/SearchController");

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images');
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}`);
  },
});

const upload = multer({ storage: Storage });

var router = express.Router();

router.get("/track", SearchController.track);

module.exports = router;
