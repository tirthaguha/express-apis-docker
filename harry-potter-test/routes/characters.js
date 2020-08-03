var express = require("express");
const request = require("request");

var router = express.Router();

const options = {
  url: `https://www.potterapi.com/v1/characters?key=${process.env.HP_KEY}`,
};

/* GET users listing. */
router.get("/", function (req, res) {
  let callback = (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const resp = JSON.parse(body);
      res.send(resp);
    } else {
      res.status(500).send(response);
    }
  };
  request(options, callback);
});

module.exports = router;
