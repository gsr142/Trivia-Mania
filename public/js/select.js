let category = 'sports'; //query selectors
let difficulty = 'medium';//query selectors

let questions;


const getQuestions = async (event) => {
    event.preventDefault();
    
    const response = await fetch(`api/question/${category}/${difficulty}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json'}
    }) 
    
    const data = await response.json()
    console.log(data);
}

const test = document.querySelector('.test-button').addEventListener('click', getQuestions)