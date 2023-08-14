const questionPanel = document.querySelector('question-panel');
const optionA = document.getElementById('A');
const optionB = document.getElementById('B');
const optionC = document.getElementById('C');
const optionD = document.getElementById('D');

optionA.addEventListener('click', checkAnswer);
optionB.addEventListener('click', checkAnswer);
optionC.addEventListener('click', checkAnswer);
optionD.addEventListener('click', checkAnswer);

const qIndex = 0;


function checkAnswer () {
    //if id of element === answer that's saved within the question obj...
        //reward user points
        //qIndex++;
        //displayQuestion(questions, qIndex)
    //else 
}

function displayQuestion(questions, index = 0){
    questionPanel.textContent = [index];
    optionA.textContent = ;
    optionB.textContent = ;
    optionC.textContent = ;
    optionD.textContent = ;
}