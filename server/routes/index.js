var express = require("express");
var router = express.Router();
const DiscordOauth2 = require("discord-oauth2");
const { json } = require("express/lib/response");

router.post("/addnewuser", function (req, res, next) {
  const userdata = req.body;
  res.send(userdata);
});

module.exports = router;
