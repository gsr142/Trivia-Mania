const router = require('express').Router();
const { Question } = require('../../models');

// this could be wrong, i tried to render everything in the triviapage, but we might have to adjust this particlar get request, might have to do a post
// and bring the user to a designated endpoint that will consist of this parameters
// for example //questions=categoryid=difficulty
router.get('/api/questions/:category', async (req, res) => {
    const categoryName = req.params.category;
    const selectedDifficulty = req.query.difficulty;

    try {
      console.log('Request received:', categoryName, selectedDifficulty);

      let questionData;

      if (categoryName === 'sports') {
        questionData = await Question.findAll({ where: { category_id: 1, difficulty: selectedDifficulty }});
      } else if (categoryName === 'video-games') {
        questionData = await Question.findAll({ where: { category_id: 2, difficulty: selectedDifficulty }});
      } else if (categoryName === 'history') {
        questionData = await Question.findAll({ where: { category_id: 3, difficulty: selectedDifficulty }});
      } else {
        return res.status(404).json({ error: 'Category not found' });
      }

      console.log('Question data:', questionData);
      res.json(questionData);
    } catch (err) {
      console.error('Error fetching questions:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;