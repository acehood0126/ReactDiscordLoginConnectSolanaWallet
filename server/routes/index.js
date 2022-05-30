var express = require("express");
var router = express.Router();
const DiscordOauth2 = require("discord-oauth2");
const discorduser = require('../controllers/discorduser.controller');

router.post("/addnewuser", discorduser.create);

module.exports = router;
