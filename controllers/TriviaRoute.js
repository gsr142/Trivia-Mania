const router = require("express").Router();
const { withAuth } = require("../utils/auth");

// Route to render trivia page with proper user authentication
router.get('/', withAuth, (req, res) => {
  // try {
      const logged_in = req.session.logged_in
      console.log(logged_in)
      console.log(req.session.high_score)
      res.render("triviapage", {logged_in, high_score: req.session.high_score});

})

module.exports = router;