const router = require("express").Router();
const { withAuth } = require("../utils/auth");

// Route to render trivia page with proper user authentication
router.get('/', withAuth, (req, res) => {
  try {
      res.render("triviapage");
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error")
  }
})

module.exports = router;