// async function seedGenerator() {
    
//     const responseData = await fetch('https://the-trivia-api.com/v2/questions');


//     const response = await responseData.json();


//     //for each element of the response array
//         //save the category, question, correct answer, difficutly, and tags to an object
//         //merge the objest to the questions seed file
//     const result = [];

//     for (let i = 0; i < response.length; i++ ) {
//         const questionObj = {
//             category: response[i].category,
//             question: response[i].question.text,
//             tags: response[i].tags,
//             difficutly: response[i].difficulty,
//         }

//         result.push(questionObj);
//     }

//     return await result;
// }

// console.log(seedGenerator());

/////

async function seedGenerator() {
    
    fetch('https://the-trivia-api.com/v2/questions')
    .then(( response )=> response.json() )
    .then( (response) => {
        console.log(response);
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
        
        result.forEach(async (q) => {
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
    } );    
}

// seedGenerator();

//save result of seedGenerator
//iterate through result, adding each item to the appropriate table

