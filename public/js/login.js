const loginForm = document.querySelector('#login-form');

// Adding event listener for form submission
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values from the form
  const username = loginForm.querySelector('#username').value.trim();
  const password = loginForm.querySelector('#password').value.trim();

  try {
    // Send a POST request to the login route
    const response = await fetch('api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Handle the response based on success or failure
    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Display success message
      document.location.href = '/triviapage'
    } else {
      const errorData = await response.json();
      console.log(errorData.message);
      document.location.href = '/'
    }
  } catch (error) {
    console.log('Error:', error);
  }
});


async function seedGenerator() {
    
  fetch('https://the-trivia-api.com/v2/questions')
  .then(( response )=> response.json() )
  .then( (response) => {
      // console.log(response);
      const result = [];
  
      for (let i = 0; i < response.length; i++ ) {
          const questionObj = {
              category: response[i].category,
              question: response[i].question.text,
              tags: response[i].tags,
              difficutly: response[i].difficulty,
              correctAnswer: response[i].correctAnswer,
              incorrectAnswers: response[i].incorrectAnswers,
          }
          
          
          result.push(questionObj);
        }
        
        return result;
    } )
    .then( (response) => {
        // console.log(response)
          response.forEach(async (q) => {
          console.log('fetch sent!')

          const response = await fetch('/api/question/seed', {
              method: 'POST',
              body: JSON.stringify({
                  category: q.category,
                  question: q.question,
                  correctAnswer: q.correctAnswer,
                  incorrectAnswers: q.incorrectAnswers,
                  difficulty: q.difficulty,
                  tags: q.tags
                  }),
              header: {'Content-Type': 'application/json'}
          }) 
          console.log('response received!')
          if (!response.ok){
              console.log('error!');
          }
        
      })
      });    
}

document.querySelector('.questions-button').addEventListener('click', seedGenerator);
