const questions = [
  //ARRAY domande
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let timeLeft = 45; // parte timer da 45 sec
const timerElement = document.getElementById("timer-text-middle"); // seleziona dove il timer viene visualizzato
const progressCircle = document.getElementById("progress-circle"); // seleziona il cerchio di progressione
const totalLength = progressCircle.getTotalLength(); // ottieni la lunghezza totale del cerchio di progressione
let timerInterval; // variabile per l'intervallo del timer
const benchmarkTitle = document.getElementById("benchmarkTitle"); //INSERIRE ID TITOLO benchmark.html
const answerList = document.getElementById("answerList"); //INSERIRE ID LIST  benchmark.html
const btnBenchmark = document.getElementById("benchmarkButton"); //INSERIRE ID BOTTONE benchmark.html
//const checkBenchmark = document.querySelectorAll(".check");  //INSERIRE CLASSE CheckBOX creati con questionAnswer();

let questionCounter = 0; //variabile globale per count questions array
let timerIntervalFunction;
const arrayCorrectAnswers = [];       //per portare in localStorage le varie risposte
const arraySelectedAnswers = [];

//const arrayDatas = JSON.stringify(questions);     //array questions trasformato in stringa e portato nel local storage per essere usato nella pagina results.html
//localStorage.setItem("arrayDatas", arrayDatas);


document.addEventListener("load", init());    //LOAD INIT 

function init() {

  //l'ordine che seguirà il Flusso di codice: Visualizzazione Domanda/Riposta/e - Timer - QuestionCounter - Img(opzionale) - Eventlistner Risposta - EventListener Procedi -  Ripeti init per 2nd domanda fino a fine delle domande
  resetList();
  setTimer();
  questionAnswer();
  saveDatas();
  
}
//AGGIUNGERE EVENTLISTNER CHE SALVA LA VALUE DELLA RISPOSTA CLICKATA SE CORRETTA NEL LOCAL STORAGE
function saveDatas() {
  arrayCorrectAnswers.push(questions[questionCounter - 1].correct_answer);
  // let correctString = JSON.stringify(arrayCorrectAnswers);         
  // localStorage.setItem("Correct", correctString);
  //al click del bottone prendi il value della risposta che è stata portata
}


btnBenchmark.addEventListener("click", function () {          //Event listner per il ciclo delle risposte fino all'ultima dell'array fornito e poi va nella pagina successiva
    clearTimeout(timerIntervalFunction);
    clearInterval(timerInterval);
  const textAnswer = document.querySelector(".selected");
  if (textAnswer !== null) {
    const string = textAnswer.innerText;
    arraySelectedAnswers.push(string);
  } else {
    arraySelectedAnswers.push("null");
  }

  if (questionCounter === questions.length) {
    //SALVA LE RISPOSTE CORRETTE E LE RISPOSTE SELEZIONATE DENTRO DUE ARRAY ARRAY JSON vedi(https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/)
    let correctString = JSON.stringify(arrayCorrectAnswers);        //AGGIUNTO PASSAGGIO IN LOCAL STORAGE DI CORRECT 
    localStorage.setItem("Correct", correctString);
    let selectedString = JSON.stringify(arraySelectedAnswers);
    localStorage.setItem("Selected", selectedString);
    window.location.href = "../../results.html";
  } else {
    init();
  }
});

answerList.addEventListener("click", function(event) {
    if (event.target.nodeName === "LI") {
        // Rimuovi la classe 'selected' da tutti gli elementi
        const allItems = answerList.querySelectorAll('li');
        allItems.forEach(item => item.classList.remove('selected'));       
        // Aggiungi la classe 'selected' solo all'elemento cliccato
        event.target.classList.add("selected");
        // Abilita il pulsante benchmark
        btnBenchmark.removeAttribute("disabled");
    }
});


function questionAnswer() {
  benchmarkTitle.innerText = questions[questionCounter].question;

  const answerArray = randomize();
  for (let i = 0; i < answerArray.length; i++) {
    const newAnswer = document.createElement("li");
    newAnswer.innerText = answerArray[i];
    //aggiungere classi e stili
    answerList.appendChild(newAnswer);
  }
  questionCount(questionCounter);
  questionCounter += 1; //MODIFICA il numero della domanda corrente alla prossima iterazione tramite bottone
}
//AGGIUNGERE FUNZIONE CHE RESETTA IL TIMER
function setTimer() {
    clearTimeout(timerIntervalFunction);
    clearInterval(timerInterval);
    timeLeft = 45;
    timerElement.textContent = timeLeft; // fix timer per visualizzare 45 sec
    progressCircle.style.strokeDashoffset = 0; // fix timer per visualizzare 45 sec
    timerInterval = setInterval(updateTimer, 1000);
  if (questionCounter < questions.length) {
    timerIntervalFunction = setTimeout(function () {
      const textAnswer = document.querySelector(".selected");
      btnBenchmark.click();
      if (textAnswer !== null) {
        const string = textAnswer.innerText;
        arraySelectedAnswers.push(string);
      } else {
        arraySelectedAnswers.push("null");
      }
      init();
    }, 46000);
  } else {
    let correctString = JSON.stringify(arrayCorrectAnswers);                       //AGGIUNTO PASSAGGIO IN LOCAL STORAGE DI CORRECT 
    localStorage.setItem("Correct", correctString);
    let selectedString = JSON.stringify(arraySelectedAnswers);
    localStorage.setItem("Selected", selectedString);
    window.location.href = "../../results.html";
  }
}




function questionCount(index) {                                              //funzione richiamata da questionAnswer che gestisce il counter delle domande
    const questionNumber = document.getElementById("questionNumber");
    questionNumber.innerHTML = `QUESTION ${index + 1} <span class = "changeColor"> / ${questions.length} </span>`;

}
function resetList() {

    benchmarkTitle.innerText = "";
    answerList.innerHTML = "";
    btnBenchmark.setAttribute("disabled", "true");
    clearInterval(timerIntervalFunction);
}

function randomize() {
  const arr = [1, 2, 3, 4];
  const randomArr = [];

  if (questions[questionCounter].type === "multiple") {
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * arr.length);
      const value = arr.splice(index, 1)[0];
      randomArr.push(value);
    }
  } else {
    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * (arr.length - 2));
      const value = arr.splice(index, 1)[0];
      randomArr.push(value);
    }
  }
  const answerArray = pushRandom(randomArr);
  return answerArray;
}

function pushRandom(arr) {
  const answerArray = [];
  if (questions[questionCounter].type === "multiple") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 4) {
        answerArray.push(
          questions[questionCounter].incorrect_answers[arr[i] - 1]
        );
      } else {
        answerArray.push(questions[questionCounter].correct_answer);
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 2) {
        answerArray.push(
          questions[questionCounter].incorrect_answers[arr[i] - 1]
        );
      } else {
        answerArray.push(questions[questionCounter].correct_answer);
      }
    }
  }
  return answerArray;
}

// Funzione per il timer e next

function updateTimer() {
  // Funzione per aggiornare il timer, aggiorna il timer e il cerchio di progressione
  if (timeLeft > 0) {
    //if timer è maggiore di 0 allora decrementa di un secondo e di conseguenza aggiorna il cerchio di progressione
    timeLeft--;
    timerElement.textContent = timeLeft;
    const progress = (timeLeft / 45) * totalLength;
    progressCircle.style.strokeDashoffset = totalLength - progress;
  } else {
    clearInterval(timerInterval);
    // Qui puoi aggiungere del codice per gestire la fine del timer
    // Per esempio, mostrare un messaggio o passare alla prossima domanda
  }

}



document.addEventListener('DOMContentLoaded', function() { // Caricamento del DOM completato prima di eseguire la funzione
  const answerList = document.getElementById('answerList'); // seleziono la lista delle risposte
  const btnBenchmark = document.getElementById('benchmarkButton'); // seleziono il pulsante benchmark

  btnBenchmark.disabled = true; // disabilitazione del pulsate all'inizio per non renderlo cliccabile prima di selezionare una risposta

  answerList.addEventListener('click', function(event) { //event lister al click su una risposta
    if (event.target.tagName === 'LI') { // verifica se l'elemento cliccato è una risposta / li
      btnBenchmark.disabled = false; // abilitiamo il pulsante dopo selezione LI
      btnBenchmark.classList.add('active'); // cambiare stile al pulsante
    }
  });

  btnBenchmark.addEventListener('click', function() { // funzione al click sul pulsante benchmark
    this.disabled = true; // disabilitiamo il pulsante dopo il click
    this.classList.remove('active'); // rimuoviamo lo stile al pulsante
  });
});

