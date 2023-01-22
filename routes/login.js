import auth from "../middleware/authorization";

//create login form and send to spotify
router.get("/login", auth, (req, res) => {
    res.redirect("https://accounts.spotify.com/authorize?" + querystring.stringify(req.query));
    });

//callback from spotify
router.get("/callback", auth, (req, res) => {
    res.redirect("http://localhost:3000/#" + querystring.stringify(req.query));
    }
);

//refresh token 
router.get("/refresh_token", auth, (req, res) => {
    res.redirect("http://localhost:3000/#" + querystring.stringify(req.query));
    }
);

module.exports = router;

