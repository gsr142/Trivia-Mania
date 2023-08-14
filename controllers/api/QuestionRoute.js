const router = require('express').Router();
const { Question, Category } = require('../../models');

router.get('/:categoryid/:difficulty', async ( req, res) => {
    try {
        console.log('GET REQUEST RECEIVED!');
        // const cat_id = await db.query('SELECT id FROM category WHERE name = ?', req.params.category);
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
        // res.render('gameboard-details', {questions: questions})
    } catch (error) {
      console.log(error)
        res.status(500).json(error);
    }
})


















// this could be wrong, i tried to render everything in the triviapage, but we might have to adjust this particlar get request, might have to do a post
// and bring the user to a designated endpoint that will consist of this parameters
// for example //questions=categoryid=difficulty
// router.get('/api/questions/:category', async (req, res) => {
//     const categoryName = req.params.category;
//     const selectedDifficulty = req.query.difficulty;

//     try {
//       console.log('Request received:', categoryName, selectedDifficulty);

//       let questionData;

//       if (categoryName === 'sports') {
//         questionData = await Question.findAll({ where: { category_id: 1, difficulty: selectedDifficulty }});
//       } else if (categoryName === 'video-games') {
//         questionData = await Question.findAll({ where: { category_id: 2, difficulty: selectedDifficulty }});
//       } else if (categoryName === 'history') {
//         questionData = await Question.findAll({ where: { category_id: 3, difficulty: selectedDifficulty }});
//       } else {
//         return res.status(404).json({ error: 'Category not found' });
//       }

//       console.log('Question data:', questionData);
//       res.json(questionData);
//     } catch (err) {
//       console.error('Error fetching questions:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }

// });


//not working... not sure why...






module.exports = router;