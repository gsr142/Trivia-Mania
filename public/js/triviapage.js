const getQuestions = async (event) => { // defining an async function that fetches questions based on the users selection
  event.preventDefault();
// getting the reference to the category and difficulty selection elements (from the trivia handlebar)
  const categorySelect = document.getElementById('category-select');
  const difficultySelect = document.getElementById('difficulty-select');
  // get the selected category and difficulty values
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;
// Sending a GET request to fetch questions based on the selected category and difficulty 
  const response = await fetch(`api/question/${category}/${difficulty}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  });

  if (response.ok) {
    const questions = await response.json();
    console.log(questions);
    // return questions
    // populates the game interface with the fetched questions
    populateQuestions(questions, difficulty);

    // hiding the category selection for and display the answer button
    document.querySelector('#category-form').setAttribute('class', 'hide');
    document.querySelector('#answer-button').removeAttribute('class');
    } else {
    console.error(error);
  }
};
// following suite after the values of the category and difficulty were selected, 
// we then define a function that populates the question based on the users selection along with the difficulty selected
async function populateQuestions(questionData, difficulty) {
  // loop through each question in the questionData array 
  for (let i = 0; i < questionData.length; i++) {
    // create elements for the game board and question 
    const gameBoard = document.createElement('div');
    const questionElement = document.createElement('div');
    questionElement.setAttribute('class', 'question-panel');
    questionElement.setAttribute('id', 'question');
    questionElement.innerText = questionData[i].question_text;
    // Creating an unordered list for answer options
    const answerPanel = document.createElement('form');
    answerPanel.setAttribute('class', 'answers-panel');
   // Create an unordered list for answer options 
    const answersList = document.createElement('ul');
    answersList.setAttribute('class', 'answers-list');
  // Attach elements to the DOM
    categoryCard = document.querySelector('.category-selection');
    categoryCard.appendChild(gameBoard);
    gameBoard.appendChild(questionElement);
    gameBoard.appendChild(answerPanel);
    answerPanel.appendChild(answersList);
  // Extract answer options, correct answer, and initialize a set to track answered questions
    let answerArr = questionData[i].answer_options;
    let answerKey = Object.values(answerArr);
    let correctAns = questionData[i].correct_answer;
    let answeredQuestions = new Set(); // preventing users to select the multiple answers and increasing their score 
    console.log(answeredQuestions)
    console.log(questionData);
    console.log(correctAns);

// Looping through answer options to create radio buttons and labels
    answerKey.forEach((elem) => {
      const answer = document.createElement('li');
      answer.setAttribute('class', 'answer');

      const answerInput = document.createElement('input');
      answerInput.setAttribute('type', 'radio');
      answerInput.setAttribute('name', 'answer');

      // give correct answer an 'id' attribute of 'correct'
      if (elem === correctAns) {
        answerInput.setAttribute('id', 'correct');
        // adding an event listener for when the correct answer is clicked 
        answerInput.addEventListener('click', function () {
        // checking the count of the answeredQuestions, and adding the count to our databased depending on what difficulty they selected 
          if (!answeredQuestions.has(i))
          if (difficulty === 'easy'){
            count++;
            console.log(count);

          } else if (difficulty === 'medium'){
            count+=2
            console.log(count);
          }else{
            count+=3
            console.log(count);
            
          }
          answeredQuestions.add(i);
          console.log(count);
        });
      }


      const label = document.createElement('label');
      label.setAttribute('for', elem);
      label.innerText = elem;

      answer.appendChild(answerInput);
      answer.appendChild(label);
      answersList.appendChild(answer);
    });
  }
}
// code below updates the highscore (leaderboard) once user completes the trivia 
count = 0; // initialize count setting it to 0

const updateHighscores = async (event) => { // update highscore that takes in a parameter of an event
  event.preventDefault();
  const high_score = event.target.getAttribute('data-highScore'); // getting the high score froma data attribute on the target element (data-HighScore)

  await fetch(`/api/user`, { //awaiting a put request to update the user's current score in a form of JSON (to update our database)
    method: 'PUT',
    body: JSON.stringify({ currentscore: count }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (count > high_score) { // checking if the useer's current score is grater than their previous highscore
    const response = await fetch(`/api/user`, { // if so, we send another PUT request 
      method: 'PUT',
      body: JSON.stringify({ highscore: count }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
    } else {
      alert('Failed to Update');
    }
  }
  // once we receieve all the information regarding our user's current/high score, we then redirect them to the leaderboard page to acknowledge their score amongst other users
  document.location.replace('/leaderboard');
};

document.addEventListener('DOMContentLoaded', () => {
  const startTriviaButton = document.querySelector('#start-trivia-button');
  startTriviaButton.addEventListener('click', getQuestions);
  document
    .querySelector('#answer-button')
    .addEventListener('click', updateHighscores);
});


