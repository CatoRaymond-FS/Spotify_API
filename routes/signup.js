//redirect to spotify signup page
router.get("/signup", (req, res) => {
    res.redirect("https://accounts.spotify.com/authorize?" + querystring.stringify(req.query));
    }
);

//callback from spotify
router.get("/callback", (req, res) => {
    res.redirect("http://localhost:3000/#" + querystring.stringify(req.query));
    }
);

//refresh token
router.get("/refresh_token", (req, res) => {
    res.redirect("http://localhost:3000/#" + querystring.stringify(req.query));
    }
);

module.exports = router;

