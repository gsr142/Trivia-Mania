const router = require('express').Router();
const { Question, Category } = require('../../models');


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
router.get('/:category/:difficulty', async ( req, res) => {
    try {
        console.log('GET REQUEST RECEIVED!');
        // const cat_id = await db.query('SELECT id FROM category WHERE name = ?', req.params.category);
        const cat_idData = await Category.findOne({
            attributes: ['id'],
            where: {
                name: req.params.category
            }
        });

        const cat_id = cat_idData.get({plain:true});

       console.log(cat_id.id, "id")
       console.log(req.params.difficulty, "difficulty")

        const questionData = await Question.findAll({
           
                where: {
                    category_id: cat_id.id,
                    difficulty: req.params.difficulty
                }
            
        });

        const questions = questionData.map( question => question.get({plain:true}));
        console.log(questions);
        res.json(questions);
        // res.render('gameboard-details', {questions: questions})
    } catch (error) {
        res.status(500).json(error);
    }
})






module.exports = router;