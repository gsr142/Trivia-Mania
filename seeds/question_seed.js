const { Question } = require('../models');

const questionData = [
    {
        category_id : 1,
        question_text: 'Which of the following Grand Slam tennis tournaments occurs LAST?',
        correct_answer: 'US Open',
        answer_options: {
            'a': 'US Open',
            'b': 'French Open',
            'c': 'Wibmledon',
            'd': 'French Open'
        },
        difficulty: 'medium'
    },
    {
        category_id : 1,
        question_text: 'Who won the 2015 College Football Playoff (CFP) National Championship?',
        correct_answer: 'Ohio State Buckeyes',
        answer_options: {
            'a': 'Alabama Crimson Tide',
        	'b': 'Clemson Tigers',
            'c': 'Ohio State Buckeyes',
        	'd': 'Wisconsin Badgers'
        },
        difficulty: 'medium'
    },
    {
        category_id : 1,
        question_text: 'What country hosted the 2014 Winter Olympics?',
        correct_answer: 'Russia',
        answer_options: {
            'a': 'Germany',
            'b': 'Russia',
            'c': 'Korea',
            'd': 'Brazil'
        },
        difficulty: 'medium'
    },
    {
        category_id : 1,
        question_text: 'Which basketball team has played in the most NBA finals?',
        correct_answer: 'Los Angeles Lakers',
        answer_options: {
            'a': 'Boston Celtics',
            'b': 'Golden State Warriors',
            'c': 'Philadelphia 76ers',
            'd': 'Los Angeles Lakers'
        },
        difficulty: 'medium'
    },
    {
        category_id : 1,
        question_text: 'Who is the top scorer for the England national football team?',
        correct_answer: 'Wayne Rooney',
        answer_options: {
            'a': 'David Beckham',
            'b': 'Wayne Rooney',
            'c': 'Michael Owen',
            'd': 'Steven Gerrard'
        },
        difficulty: 'medium'
    },
    {
        category_id : 2,
        question_text: 'In what video game does Mario first appear?',
        correct_answer: 'Jump Man',
        answer_options: {
            'a': 'Donkey Kong, Jr',
            'b': 'Super Mario Brothers',
            'c': 'Jump Man',
            'd': 'Donkey Kong'
        },
        difficulty: 'medium'
    }
];


module.exports = questionData;