const router = require('express').Router();
const { Question, Category } = require('../../models');

router.get('/:categoryid/:difficulty', async ( req, res) => {
    try {
        console.log('GET REQUEST RECEIVED!');
        const cat_idData = await Category.findOne({
            attributes: ['id'],
            where: {
                id: req.params.categoryid
            }
        });

        const cat_id = cat_idData.get({plain:true})

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
    } catch (error) {
      console.log(error)
        res.status(500).json(error);
    }
})

module.exports = router;