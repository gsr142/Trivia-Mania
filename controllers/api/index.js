const router = require('express').Router();
const userRoutes = require('./userRoute');
const questionRoutes = require('./QuestionRoute');
const categoryRoutes = require('./categoryRoute');


router.use('/user', userRoutes);
router.use('/question', questionRoutes);
router.use('/category', categoryRoutes);



module.exports = router;