let category = 'sports'; //query selectors
let difficulty = 'medium';//query selectors

let questions;

const populateCategories = async () => {
    const categorySelect = document.getElementById('category-select');
  
    try {
      const response = await fetch('/api/categories');
      if (response.ok) {
        const categories = await response.json();
        categories.forEach((category) => {
          const option = document.createElement('option');
          option.value = category.id;
          option.textContent = category.name;
          categorySelect.appendChild(option);
        });
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  // eventlistener responsible for loading content to our dropdown menu calling our function (populateCategories)
  document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
  
    document // adding a click event listener to the 'start trivia' button
      .getElementById('start-trivia-button')
      .addEventListener('click', async () => {
        console.log('Start Trivia button clicked'); 
        // get references to category and difficulty selection elements
        const categorySelect = document.getElementById('category-select');
        const difficultySelect = document.getElementById('difficulty-select');
        // get the selected category and difficulty values
        const selectedCategoryId = categorySelect.value;
        const selectedDifficulty = difficultySelect.value;
        try {
          console.log('Sending request...');
          // send a GET request to fetch questions based on the selected category and difficulty 
          const response = await fetch(`/api/questions/${selectedCategoryId}?difficulty=${selectedDifficulty}`, {
            method: 'GET',
          });
          // checking if the response is successful
          if (response.ok) {
            console.log('Response received:', response);
          // parse the response data as JSON to get the questions
            const questions = await response.json();
            console.log('Questions:', questions);
            // Render the fetched questions
            renderQuestions(questions);
          } else {
            console.error('Failed to fetch questions');
          }
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      });
  });



// Define an asynchronous function named getQuestions, which fetches question
const getQuestions = async (event) => {
    event.preventDefault();
  // Send a GET request to fetch questions based on the users (category, difficulty)
    const response = await fetch(`api/question/${category}/${difficulty}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json'}
    }) 
    
    const data = await response.json()
    console.log(data);
}

const test = document.querySelector('.test-button').addEventListener('click', getQuestions)