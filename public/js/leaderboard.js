const leaderBoard = document.querySelector(".leader-board");


const fetchScores = async () => {

    const response = await fetch ('/api/user/highscores', {
                method: 'GET',
                headers: { 'Content-type': 'application/json'}
            })

    console.log(response);

}