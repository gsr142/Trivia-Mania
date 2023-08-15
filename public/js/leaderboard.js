const leaderBoard = document.querySelector(".leader-board");

const fetchScores = async () => {

    const response = await fetch ('/api/user/highscores', {
                method: 'GET',
                headers: { 'Content-type': 'application/json'}
            })

    console.log(response);

}





// ///////////////////////////////////////////////////////

// async function fetchScores(event){

//     const response = await fetch ('/api/user', {
//         method: 'GET',
//         headers: { 'Content-type': 'application/json'}
//     })

//     console.log('fetch received!');
//     if (response.ok){
//         console.log(response);
//         populateHighScores(response.json());
//     }
// }

// async function populateHighScores(userData){
    

//     for (let i = 0; i < 3; i++) {
//         const userCard = document.createElement('div');
//         userCard.setAttribute('class', 'user');
//         userCard.innerText = userData[i].name + ' ' + userData[i].highscore;
//         console.log(userData)
//         leaderBoard.append(userCard);
//     }

//     console.log('userCards appended');
// }

// fetchScores();