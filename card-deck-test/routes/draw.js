var express = require("express");
var router = express.Router();

const axios = require("axios");

/* GET users listing. */
router.get("/:deckId", function (req, res, next) {
  console.log("------>", req.params.deckId);
  let deckId = req.params.deckId;
  let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`;
  axios.get(url).then((resp) => {
    console.log(resp.data);
    res.send(resp.data);
  });
});

module.exports = router;
