const router = require('express').Router();
const categoryRoutes = require('./categoryRoute');
const leaderboardRoutes = require('./leaderboardRoute');
const questionRoutes = require('./QuestionRoute');
const startRoutes = require('./startRoute');
const userRoutes = require('./userRoute');

//router.use('/category', categoryRoutes);
//router.use('/leaderboard', leaderboardRoutes);
//router.use('/question', questionRoutes);
//router.use('/start', startRoutes)
router.use('/user', userRoutes)

module.exports = router;