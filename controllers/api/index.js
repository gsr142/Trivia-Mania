const router = require('express').Router();
const userRoutes = require('./userRoute');
// // const categoryRoutes = require('./categoryRoute');
// // const leaderboardRoutes = require('./leaderboardRoute');
// // const questionRoutes = require('./QuestionRoute');
// // const startRoutes = require('./startRoute');

router.use('/user', userRoutes);

// //router.use('/category', categoryRoutes);
// //router.use('/leaderboard', leaderboardRoutes);
// //router.use('/question', questionRoutes);
// //router.use('/start', startRoutes)
// // router.use('/user', userRoutes)

module.exports = router;