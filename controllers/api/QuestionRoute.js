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


//not working... not sure why...
router.get('/:category/:difficutly', async ( req, res) => {
    try {

        const cat_id = db.query('SELECT id FROM category WHERE name = ?', req.params.category);

        const questionData = await Question.findAll({
            include: {
                where: {
                    category_id: cat_id,
                    difficutly: req.params.difficulty,
                }
            }
        });
        const questions = questionData.map( question => question.get({plain:true}));

        // res.json(questionData);
        res.render('gameboard-details', {questions: questions})
    } catch (error) {
        res.status(500).json(error);
    }
})






module.exports = router;