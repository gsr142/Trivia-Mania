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
  
    document
      .getElementById('start-trivia-button')
      .addEventListener('click', async () => {
        console.log('Start Trivia button clicked'); // Added console log
  
        const categorySelect = document.getElementById('category-select');
        const difficultySelect = document.getElementById('difficulty-select');
  
        const selectedCategoryId = categorySelect.value;
        const selectedDifficulty = difficultySelect.value;
  // below is optional, i tried console logging stuff but it wasn't doing anything for me here
        try {
          console.log('Sending request...');
          const response = await fetch(`/api/questions/${selectedCategoryId}?difficulty=${selectedDifficulty}`, {
            method: 'GET',
          });
  
          if (response.ok) {
            console.log('Response received:', response);
            const questions = await response.json();
            console.log('Questions:', questions);
            renderQuestions(questions);
          } else {
            console.error('Failed to fetch questions');
          }
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      });
  });




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