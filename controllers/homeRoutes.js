const router = require("express").Router();
const reverseBubbleSort = require('../utils/helpers');
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
    console.log('GET: /triviapage');
    const categoriesData = await Category.findAll();
    const categories = await categoriesData.map(category => category.get({plain: true}));

    const userData = await User.findOne({ where: { id: req.session.user_id}});
    console.log('HIGHSCORE!: ' + userData.dataValues.highscore);
    const highScore = userData.dataValues.highscore;

    // const highScore = user.highscore;
    res.render('triviapage', {categories: categories, logged_in: req.session.logged_in, high_score: highScore});
})


router.get("/leaderboard", async (req, res) => {

    const highScoresData = await User.findAll({attributes: ['name', 'highscore']});
    const highScores = highScoresData.map( highScore => highScore.get({plain:true}));
    // console.log(highScores);

    const topThree = reverseBubbleSort(highScores).slice(0,3);

    res.render('leaderboard', {
        logged_in: req.session.logged_in,
        topThree: topThree});
})

module.exports = router;