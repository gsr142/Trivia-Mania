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
            }
    
            result.push(questionObj);
        }
        
        console.log(result);
        return result;
    } );


    // const response = await responseData.json();


    // //for each element of the response array
    //     //save the category, question, correct answer, difficutly, and tags to an object
    //     //merge the objest to the questions seed file

    // return await result;
}

seedGenerator();