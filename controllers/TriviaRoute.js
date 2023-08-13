const router = require("express").Router();
const { Category } = require("../models");
const { withAuth } = require("../utils/auth");

// Rendering all categories to the trivia page
router.get("/", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["name"],
    });
    
    res.render("triviapage", { categories: categoryData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;