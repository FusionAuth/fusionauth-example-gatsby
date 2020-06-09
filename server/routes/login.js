const express = require('express');
const router = express.Router();
const config = require('../../config');
const pkce = require('../helpers/pkce');

router.get('/', (req, res) => {
  req.session.verifier = pkce.generateVerifier();
  const challenge = pkce.generateChallenge(req.session.verifier);

  res.redirect(`http://localhost:${config.fusionAuthPort}/oauth2/authorize?client_id=${config.clientID}&redirect_uri=${config.redirectURI}&response_type=code&code_challenge=${challenge}&code_challenge_method=S256`);
});

module.exports = router;