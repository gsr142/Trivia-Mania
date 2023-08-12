const router = require('express').Router();
const categoryRoutes = require('./categoryRoute');
const leaderboardRoutes = require('./leaderboardRoute');
const questionRoutes = require('./QuestionRoute');
const startRoutes = require('./startRoute');

router.use('/category', categoryRoutes);
router.use('/leaderboard', leaderboardRoutes);
router.use('/question', questionRoutes);
router.use('/start', startRoutes)