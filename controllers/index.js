const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoute')
const newPlayerRoutes = require('./newplayer')
const triviaRoute = require('./TriviaRoute')


router.use("/", homeRoutes);
router.use("/login", loginRoutes)
router.use("/newplayer", newPlayerRoutes)
router.use("/api", apiRoutes);
router.use("/triviapage", triviaRoute)

module.exports = router;