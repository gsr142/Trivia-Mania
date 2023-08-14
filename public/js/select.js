let category = 'sports';
let difficulty = 'medium';

let questions;

const test = document.querySelector('.test-button').addEventListener('click', getQuestions)

const getQuestions = async (event) => {
    event.preventDefault();

    const response = await fetch(`api/question/${category}/${difficulty}`, {
        method: 'POST',
        body: JSON.stringify({category: category, difficulty: difficulty}),
        headers: { 'Content-type': 'application/json'}
    }) 

    console.log(response.json())
}