const makingSelections = true;

const user = {
    category: '',
    difficulty: ''
}

res.render('trivipage', makingSelections)
// const buttonClick = (e) => {
//     e.preventDefault();

//     // if (e.target === category) {
//     //     user.category = e.target.value?

//     // } else if (e.target === difficulty){
//     //     user.difficulty = e.target.value?
//     // }

//     //if category and difficulty are both truthy values...
//     if (user.category && user.difficulty) {
//         //fetch: POST api/deck/new 
//             //- this route will generate a new deck, with an array of questions
//     }

// }