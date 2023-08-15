const populateCategories = async () => {
  const categorySelect = document.getElementById('category-select');

  try {
    const response = await fetch('/api/category');
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

const getQuestions = async (event) => {
  event.preventDefault();

  const categorySelect = document.getElementById('category-select');
  const difficultySelect = document.getElementById('difficulty-select');
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;

  const response = await fetch(`api/question/${category}/${difficulty}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  });
  // console.log(response);
  if (response.ok) {
    // console.log('response received:', response);
    const questions = await response.json();
    console.log(questions);
    // return questions
    populateQuestions(questions);
  } else {
    console.error(error);
  }
  // console.log(data);
  // return data.render()
};

async function populateQuestions(questionData) {
  
  for (let i = 0; i < questionData.length; i++) {
    const gameBoard = document.createElement('div');
    const questionElement = document.createElement('div');
    questionElement.setAttribute('class', 'question-panel');
    questionElement.setAttribute('id', 'question');
    questionElement.innerText = questionData[i].question_text;
    
    const answerPanel = document.createElement('form');
    answerPanel.setAttribute('class', 'answers-panel');

    const answersList = document.createElement('ul');
    answersList.setAttribute('class', 'answers-list');
    categoryCard = document.querySelector('.category-selection')
    categoryCard.appendChild(gameBoard)
    gameBoard.appendChild(questionElement);
    gameBoard.appendChild(answerPanel);
    answerPanel.appendChild(answersList);
    
    
    let answerArr = questionData[i].answer_options;
    let answerKey = Object.values(answerArr);
    
    answerKey.forEach((elem) => {
      const answer = document.createElement('li');
      answer.setAttribute('class', 'answer');
      
      const answerInput = document.createElement('input');
      answerInput.setAttribute('type', 'radio');
      answerInput.setAttribute('name', 'answer');
      // answerInput.setAttribute('id', );
      const label = document.createElement('label');
      label.setAttribute('for', elem);
      label.innerText = elem;
      
      
      answer.appendChild(answerInput);
      answer.appendChild(label);
      answersList.appendChild(answer);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // const categorySelect = document.getElementById('category-select');
  // const difficultySelect = document.getElementById('difficulty-select');
  // populateCategories();

  const startTriviaButton = document.querySelector('#start-trivia-button');
  startTriviaButton.addEventListener('click', getQuestions);
});

// // Function to fetch and populate categories in the dropdown
// const populateCategories = async () => {
//   const categorySelect = document.getElementById('category-select');

//   try {
//     const response = await fetch('/api/categories');
//     if (response.ok) {
//       const categories = await response.json();
//       categories.forEach((category) => {
//         const option = document.createElement('option');
//         option.value = category.id;
//         option.textContent = category.name;
//         categorySelect.appendChild(option);
//       });
//     } else {
//       console.error('Failed to fetch categories');
//     }
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// };
// document.addEventListener('DOMContentLoaded', () => {
//   populateCategories();

//   const selectedCategoryId = categorySelect.value;
//   const selectedDifficulty = difficultySelect.value;

//   const categorySelect = document.getElementById('category-select');
//   const difficultySelect = document.getElementById('difficulty-select');

// const getQuestions = async (event) => {
//   event.preventDefault();

//   const response = await fetch(`api/question/${category}/${difficulty}`, {
//       method: 'GET',
//       headers: { 'Content-type': 'application/json'}
//   })

//   const data = await response.json()
//   console.log(data);
// }

// const test = document.querySelector('.start-trivia-button').addEventListener('click', getQuestions)

// // eventlistener responsible for loading content to our dropdown menu calling our function (populateCategories)

//   document
//     .getElementById('start-trivia-button')
//     .addEventListener('click', async () => {
//       console.log('Start Trivia button clicked'); // Added console log

//       const categorySelect = document.getElementById('category-select');
//       const difficultySelect = document.getElementById('difficulty-select');

//       const selectedCategoryId = categorySelect.value;
//       const selectedDifficulty = difficultySelect.value;
// // below is optional, i tried console logging stuff but it wasn't doing anything for me here
//       try {
//         console.log('Sending request...');
//         const response = await fetch(`/api/questions/${selectedCategoryId}?difficulty=${selectedDifficulty}`, {
//           method: 'GET',
//         });

//         if (response.ok) {
//           console.log('Response received:', response);
//           const questions = await response.json();
//           console.log('Questions:', questions);
//           renderQuestions(questions);
//         } else {
//           console.error('Failed to fetch questions');
//         }
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     });
// });
// this portion is here, if we would like to acquire the id of the cateogry
// along with the difficulty id
// this will prepare for the next questionaire depending on what the user selected
// still trying to see if it's better to add difficulty id

// dynamically fetching categories
// overall provides scalability for when we want to add more categories in the future for this application
