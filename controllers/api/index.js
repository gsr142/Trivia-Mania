const router = require('express').Router();
const userRoutes = require('./userRoute');
const questionRoutes = require('./QuestionRoute');
const categoryRoutes = require('./categoryRoute');
// // const leaderboardRoutes = require('./leaderboardRoute');
// // const startRoutes = require('./startRoute');

router.use('/user', userRoutes);
router.use('/question', questionRoutes);
router.use('/category', categoryRoutes);
// //router.use('/leaderboard', leaderboardRoutes);


module.exports = router;