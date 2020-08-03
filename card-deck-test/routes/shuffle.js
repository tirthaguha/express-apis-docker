var express = require("express");
var router = express.Router();

const axios = require("axios");

/* GET users listing. */
router.get("/", function (req, res, next) {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
});

module.exports = router;
