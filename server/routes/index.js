var express = require("express");
var router = express.Router();
const DiscordOauth2 = require("discord-oauth2");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/discordauthenticate", function (req, res, next) {
  const oauth = new DiscordOauth2();

  oauth
    .tokenRequest({
      clientId: "934363403550593024",
      clientSecret: "WSVa1qcqz1Ger-Km9RebOgfjIgk5VBvK",

      code: "query code",
      scope: "identify guilds",
      grantType: "authorization_code",

      redirectUri: "http://localhost:3000/login/discord",
    })
    .then(console.log);
});

module.exports = router;
