const router = require("express").Router();
const { Category } = require('../models');

// rendering to homepage
router.get("/", async (req, res) => {
    try {
        res.render("homepage", {logged_in: req.session.logged_in});
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send("Server Error") 
    }
});

router.get("/triviapage", async (req, res) => {
    const categoriesData = await Category.findAll();
    const categories = await categoriesData.map(category => category.get({plain: true}));
    res.render('triviapage', {categories: categories, logged_in: req.session.logged_in});
})

module.exports = router;