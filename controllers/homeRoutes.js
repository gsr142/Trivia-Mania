const router = require("express").Router();
const { Category, User} = require('../models');

// rendering to homepage
router.get("/", async (req, res) => {
    try {
        console.log(req.session.logged_in);
        res.render("homepage", {logged_in: req.session.logged_in});
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send("Server Error") 
    }
});

router.get("/triviapage", async (req, res) => {

    const categoriesData = await Category.findAll();
    const categories = await categoriesData.map(category => category.get({plain: true}));
    res.render('triviapage', {categories: categories, logged_in: req.session.logged_in, high_score: req.session.high_score});
})

router.get("/leaderboard", async (req, res) => {

    const highScoresData = await User.findAll({attributes: ['name', 'highscore']});
    const highScores = highScoresData.map( highScore => highScore.get({plain:true}));

    const topThree = reverseBubbleSort(highScores);

    
})

module.exports = router;