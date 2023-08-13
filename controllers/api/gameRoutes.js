const router = require('express').Router();
const { Deck,  Question} = require('../../models');

router.use('/:category/:difficulty', {

    const questionsData = Question.findAll({include: {where: {
        categery: req.params.category,
        difficulty: req.params.difficulty,
    }}})
})