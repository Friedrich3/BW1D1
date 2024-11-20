const answerChart = document.getElementById("chart");
const percentageWrong = document.querySelector(".percentageWrong");
const percentageRight = document.querySelector(".percentageRight")
const arrayCorrectAnswer = [];
let arraySelectedAnswers = []; //non funziona con il const
let countCorrect = 0;  //contatore per tenere conto delle risposte corrette
document.addEventListener("load", init());

function init(){
  getAnswer();
  compareAnswer();
  percentages();
  new Chart(answerChart, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: 'Answers',
        data: [countCorrect, arraySelectedAnswers.length-countCorrect], 
        borderWidth: 0,
        cutout: 150, 
        backgroundColor:[
          "#00ffff",
          "#d20094"
        ]
      }]
    },
  });
}

/*funzione per ricavare gli array dal local storage*/
function getAnswer(){
  const correctAnswer = localStorage.getItem("Correct");
  arrayCorrectAnswers = JSON.parse(correctAnswer);
  console.log(arrayCorrectAnswers);

  const selectedAnswer = localStorage.getItem("Selected");
  arraySelectedAnswers = JSON.parse(selectedAnswer);
  console.log(arraySelectedAnswers);
}

/*funzione per comparare le risposte*/
function compareAnswer(){
  for(let i=0; i<arraySelectedAnswers.length; i++){
    if(arrayCorrectAnswers[i]===arraySelectedAnswers[i]){
      countCorrect++;
    }
  }
}

function percentages(){
  percentageRight.textContent = `${countCorrect*10}%`;
  percentageWrong.textContent = `${100-countCorrect*10}%`;
}
