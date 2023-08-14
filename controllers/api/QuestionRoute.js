const router = require('express').Router();
const { Question } = require('../../models');


router.get('/sports', async (req, res) => {
    try {
        const questionData = await Question.findAll({ where: {category_id: 1}});
        res.json(questionData)
    }catch (err) {
        console.error()
    }
});

router.get('/history', async (req, res) => {
    try {
        const questionData = await Question.findAll({ where: {category_id: 3}});
        res.json(questionData)
    }catch (err) {
        console.error()
    }
});

router.get('/video-games', async (req, res) => {
    try {
        const questionData = await Question.findAll({ where: {category_id: 2}});
        res.json(questionData)
    }catch (err) {
        console.error()
    }
});
module.exports = router;