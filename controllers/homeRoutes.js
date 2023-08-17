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

// Define a route handler for rendering the trivia page
router.get("/triviapage", async (req, res) => {
    console.log('GET: /triviapage');  
    // Fetch categories data from the database and covert to an array of plain objects
    const categoriesData = await Category.findAll();
    const categories = await categoriesData.map(category => category.get({plain: true}));
// fetching the current user's data including their high score
    const userData = await User.findOne({ where: { id: req.session.user_id}});
    console.log('HIGHSCORE!: ' + userData.dataValues.highscore);
    const highScore = userData.dataValues.highscore; // geting the users highscore

    // Render the 'triviapage' template and provide data to the template engine
    res.render('triviapage', {categories: categories, logged_in: req.session.logged_in, high_score: highScore});
})

// defining the route handler for rendering the leaderboard page
router.get("/leaderboard", async (req, res) => {
// getting highscore data from the database, including name, highscore, and current score
// converting the highscores data into an array of plain objects
    const highScoresData = await User.findAll({attributes: ['name', 'highscore', 'currentscore']});
    const highScores = highScoresData.map( highScore => highScore.get({plain:true}));
    // Fetching the current user's data including their current score
    const userData = await User.findOne({ where: { id: req.session.user_id}});
    console.log(userData.dataValues.currentscore);
    const currentScore = userData.dataValues.currentscore;
    // sorting through the high scores using reverse bubble sort and getting the top three scores
    const topThree = reverseBubbleSort(highScores).slice(0,3);
// rendering the 'leaderboard' template and passing in the data to the template engine 
    res.render('leaderboard', {
        logged_in: req.session.logged_in, //indicates if the user is logged in
        topThree: topThree, // top three high scores to display
        current_score: currentScore, // current user's score to display
    });
})

module.exports = router;