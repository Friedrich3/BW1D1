const answerChart = document.getElementById("chart");
const percentageWrong = document.querySelector(".percentageWrong");
const percentageRight = document.querySelector(".percentageRight");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const btnRateUs =  document.getElementById("btnRateUs");
const arrayCorrectAnswer = [];
let arraySelectedAnswers = []; //non funziona con il const
let countCorrect = 0;  //contatore per tenere conto delle risposte corrette
document.addEventListener("load", init());

function init(){
  getAnswer();
  compareAnswer();
  percentages();
  quantifyAnswers();
  new Chart(answerChart, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: 'Answers',
        data: [countCorrect, arraySelectedAnswers.length-countCorrect], 
        borderWidth: 0,
        rotation: 330,
        cutout: 150, 
        backgroundColor:[
          "#00ffff",
          "#d20094"
        ]
      }]
    },
  });
};

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
//funzione per stampare la quantità di risposte corrette e sbagliate
function quantifyAnswers(){
  correctAnswers.innerHTML = `<span >${countCorrect}</span> out of <span class="totalQuestions">${arraySelectedAnswers.length}</span>`;
  wrongAnswers.innerHTML = `<span >${arraySelectedAnswers.length - countCorrect}</span> out of <span class="totalQuestions">${arraySelectedAnswers.length}</span>`;
}

function rateUs(){
  window.location.href = "../../feedback.html";
}