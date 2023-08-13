const router = require('express').Router();
const { Deck,  Question} = require('../../models');

//fetch will be made upon category and difficulty getting selected
//GET: api/:category/:difficulty
router.get('/:category/:difficulty', async (req, res) => {
    //db.query to use the category req param to get a category id. save to const cat_id
    const cat_id = db.query(`SELECT id FROM category WITH name = ?`, req.params.category, (err, res) => {
        return res;
    });

    const questionsJSON = await Question.findAll({include: {where: {
        categery_id: cat_id,
        difficulty: req.params.difficulty,
    }}})

    // serialize questionsJSON, save to const questions

    // Deck.bulkCreate(questions)
})