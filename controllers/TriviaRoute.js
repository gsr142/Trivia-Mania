const router = require("express").Router();
const { withAuth } = require("../utils/auth");

// Route to render trivia page with proper user authentication
router.get('/', withAuth, (req, res) => {
  try {
      const logged_in = req.session.logged_in
      console.log(logged_in)
      res.render("triviapage", {logged_in});
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error")
  }
})

module.exports = router;