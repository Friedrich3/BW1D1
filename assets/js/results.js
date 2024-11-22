const answerChart = document.getElementById("chart");
const percentageWrong = document.querySelector(".percentageWrong");
const percentageRight = document.querySelector(".percentageRight");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const btnRateUs = document.getElementById("btnRateUs");
const questionList = document.getElementById("questionList");
let arrayQuestions = [];        //non funziona con il const
const arrayCorrectAnswer = [];
let arraySelectedAnswers = []; //non funziona con il const
let countCorrect = 0;  //contatore per tenere conto delle risposte corrette



window.onmouseover = (event) => {
  if (event.target.tagName !== "BUTTON") {
    window.addEventListener("beforeunload", unloadController);
  } else {
    window.removeEventListener("beforeunload", unloadController)
  }
};
function unloadController(e) {
  e.preventDefault();
};

document.addEventListener("load", init());

function init() {
  getAnswer();
  compareAnswer();
  percentages();
  quantifyAnswers();
  examResult();
  answerList();
  new Chart(answerChart, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: 'Answers',
        data: [countCorrect, arraySelectedAnswers.length - countCorrect],
        borderWidth: 0,
        cutout: 150,
        rotation: 30,
        backgroundColor: [
          "#00ffff",
          "#d20094"
        ],
        hoverOffset: 2,
        
      }]
    },
  });
};

/*funzione per ricavare gli array dal local storage*/
function getAnswer() {
  const correctAnswer = localStorage.getItem("Correct");
  arrayCorrectAnswers = JSON.parse(correctAnswer);
  //console.log(arrayCorrectAnswers);

  const selectedAnswer = localStorage.getItem("Selected");
  arraySelectedAnswers = JSON.parse(selectedAnswer);
  //console.log(arraySelectedAnswers);

  const questions = localStorage.getItem("arrayDatas");
  arrayQuestions = JSON.parse(questions);
  //console.log(arrayQuestions);
}

/*funzione per comparare le risposte*/
function compareAnswer() {
  for (let i = 0; i < arraySelectedAnswers.length; i++) {
    if (arrayCorrectAnswers[i] === arraySelectedAnswers[i]) {
      countCorrect++;
    }
  }
}

function percentages() {
  percentageRight.textContent = `${(countCorrect / arraySelectedAnswers.length) * 100}%`;                  //Corretto calcolo percetuale per flessibilità con diverse domande
  percentageWrong.textContent = `${100 - ((countCorrect / arraySelectedAnswers.length) * 100)}%`;
}
//funzione per stampare la quantità di risposte corrette e sbagliate
function quantifyAnswers() {
  correctAnswers.innerHTML = `<span >${countCorrect}</span> out of <span class="totalQuestions">${arraySelectedAnswers.length}</span>`;
  wrongAnswers.innerHTML = `<span >${arraySelectedAnswers.length - countCorrect}</span> out of <span class="totalQuestions">${arraySelectedAnswers.length}</span>`;
}

function examResult() {
  const examTitle = document.getElementById("examTitle");
  const parExam = document.getElementById("parExam");
  if ((countCorrect / arraySelectedAnswers.length) * 100 >= 60) {
    examTitle.innerHTML = "Congratulations!<br><span>You passed the exam.</span>";
    const colorExamTitle = document.querySelector("#examTitle span");
    colorExamTitle.style.color = "#00ffff";
    parExam.innerHTML = "We'll send you the certificate in few minutes.<br/>Check your email(including promotion/spam folder)";
  } else {
    examTitle.innerHTML = "We're sorry!<br><span>You failed the exam.</span>";
    const colorExamTitle = document.querySelector("#examTitle span");
    colorExamTitle.style.color = "#d20094";
    parExam.innerHTML = "Don't worry! You can try again and get your certificate!";
  };
};

function rateUs() {
  window.location.href = "../../feedback.html";
}

//TUTTO IL CODICE CHE GESTISCE LA CREAZIONE DELLA LISTA

function answerList(){
  for(let i = 0; i < arrayQuestions.length; i++){
    const newLi = document.createElement("li");
    const newQuestion = document.createElement("h4");
    const newCorrAnswer = document.createElement("p");
    const newWrongAnswer = document.createElement("p");

    newQuestion.innerText = `${i+1}. ${arrayQuestions[i]}`;
    newCorrAnswer.innerHTML = `Correct Answer: ${arrayCorrectAnswers[i]} &#9989;`;
    newWrongAnswer.innerHTML = `Your Answer: ${arraySelectedAnswers[i]} &#10060;`;

    questionList.appendChild(newLi);
    newLi.appendChild(newQuestion);
    if(arrayCorrectAnswers[i] == arraySelectedAnswers[i]){
      newLi.appendChild(newCorrAnswer);
    }else{
      newLi.appendChild(newCorrAnswer);
      newLi.appendChild(newWrongAnswer);
    }

  }
}

function returnHome(){
  window.location.href = "../../welcome.html";
}