document.querySelector('.answer-a').addEventListener('click', checkAnswer);
document.querySelector('.answer-b').addEventListener('click', checkAnswer);
document.querySelector('.answer-c').addEventListener('click', checkAnswer);
document.querySelector('.answer-d').addEventListener('click', checkAnswer);

const checkAnswer = async (e) => {
//this function will compare the value of the list item to the "answer key"
//via GET: api/question/:id, 

//if correct, res.render(to the same page, but to the next question of the array)

}

const generateDeck = (e) => {
    e.preventDefault();

    //will fetch an x number of questions from the Question table.
    //- a paramter will be provided by the fetch request, to specify the category and difficulty
    //- WITHIN THE GET ROUTE: .findAll, {include: {}}, res.render(trivia, {questions: questions})
        //- but before the render...
            //adjust length of array to desired length

    
}

const deck = generateDeck();

