const { User } = require('../models');

const userData = [
    {
        name: 'GregR',
        password: 'password'
    },
    {
        name: 'JoelL',
        password: 'password'

    },
    {
        name: 'JustinC',
        password: 'password'
    }
]

function seedUsers (){
    return User.bulkCreate(userData);
}

module.exports = seedQuestions;