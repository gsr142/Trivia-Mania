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

  if (response.ok) {
    const questions = await response.json();
    console.log(questions);
    // return questions
    populateQuestions(questions, difficulty);
    document.querySelector('#category-form').setAttribute('class', 'hide');
    document.querySelector('#answer-button').removeAttribute('class');
    } else {
    console.error(error);
  }
};

async function populateQuestions(questionData, difficulty) {
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
    categoryCard = document.querySelector('.category-selection');
    categoryCard.appendChild(gameBoard);
    gameBoard.appendChild(questionElement);
    gameBoard.appendChild(answerPanel);
    answerPanel.appendChild(answersList);

    let answerArr = questionData[i].answer_options;
    let answerKey = Object.values(answerArr);
    let correctAns = questionData[i].correct_answer;
    let answeredQuestions = new Set();
    console.log(answeredQuestions)
    console.log(questionData);
    console.log(correctAns);

    // const difficultySelect = document.getElementById('difficulty-select');
    // const difficulty = difficultySelect.value;
    
    answerKey.forEach((elem) => {
      const answer = document.createElement('li');
      answer.setAttribute('class', 'answer');

      const answerInput = document.createElement('input');
      answerInput.setAttribute('type', 'radio');
      answerInput.setAttribute('name', 'answer');

      // give correct answer an id of correct
      if (elem === correctAns) {
        answerInput.setAttribute('id', 'correct');

        answerInput.addEventListener('click', function () {

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

count = 0;

const updateHighscores = async (event) => {
  event.preventDefault();
  const high_score = event.target.getAttribute('data-highScore');

  await fetch(`/api/user`, {
    method: 'PUT',
    body: JSON.stringify({ currentscore: count }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (count > high_score) {
    const response = await fetch(`/api/user`, {
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
  
  document.location.replace('/leaderboard');
};

document.addEventListener('DOMContentLoaded', () => {
  const startTriviaButton = document.querySelector('#start-trivia-button');
  startTriviaButton.addEventListener('click', getQuestions);
  document
    .querySelector('#answer-button')
    .addEventListener('click', updateHighscores);
});


