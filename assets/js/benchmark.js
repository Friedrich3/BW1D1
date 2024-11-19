const questions = [                         //ARRAY domande
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
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
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


const benchmarkTitle = document.getElementById("benchmarkTitle");   //INSERIRE ID TITOLO benchmark.html
const answerList = document.getElementById("answerList");           //INSERIRE ID LIST  benchmark.html
const btnBenchmark = document.getElementById("benchmarkButton");     //INSERIRE ID BOTTONE benchmark.html 
const checkBenchmark = document.querySelectorAll(".check");          //INSERIRE CLASSE CheckBOX creati con questionAnswer();

let questionCounter = 0;    //variabile globale per count questions array

document.addEventListener("load", init());

function init() {
    resetList();                    //l'ordine che seguirà il Flusso di codice: Visualizzazione Domanda/Riposta/e - Timer - QuestionCounter - Img(opzionale) - Eventlistner Risposta - EventListener Procedi -  Ripeti init per 2nd domanda fino a 10
    questionAnswer();
}

//AGGIUNGERE EVENTLISTNER CHE SALVA LA VALUE DELLA RISPOSTA CLICKATA SE CORRETTA NEL LOCAL STORAGE


btnBenchmark.addEventListener("click" , function(){                 //Event listner per il ciclo delle risposte fino all'ultima dell'array fornito e poi va nella pagina successiva
    if(questionCounter === questions.length){
        window.location.href = "../../results.html";
    }else{
        resetList();
        questionAnswer();
    }
});

answerList.addEventListener ("click" , function (element){
    if(element.target.nodeName === "LI"){
        btnBenchmark.toggleAttribute("disabled");
}});


function questionAnswer(){
    benchmarkTitle.innerText = questions[questionCounter].question;  

    const answerArray = randomize();
    for(let i=0; i<answerArray.length; i++){
        const newAnswer = document.createElement("li");
        newAnswer.innerText = answerArray[i];
        //aggiungere classi e stili 
        answerList.appendChild(newAnswer);
    }
    questionCount(questionCounter);
    questionCounter += 1       //MODIFICA il numero della domanda corrente alla prossima iterazione tramite bottone

};


//AGGIUNGERE FUNZIONE CHE RESETTA IL TIMER

function questionCount(index) {                                              //funzione richiamata da questionAnswer che gestisce il counter delle domande
    const questionNumber = document.getElementById("questionNumber");
    questionNumber.innerText = `QUESTION ${index + 1}/${questions.length}`;
}
function resetList() {
    benchmarkTitle.innerText = "";
    answerList.innerHTML = "";
    btnBenchmark.toggleAttribute("disabled")
}


function randomize(){
    const arr = [1,2,3,4];
    const randomArr = [];
    
    if(questions[questionCounter].type==="multiple"){
        for(let i=0; i<4; i++){
            const index = Math.floor(Math.random() * arr.length);
            const value = arr.splice(index, 1)[0]; 
            randomArr.push(value);
        }
    }else{
        for(let i=0; i<2; i++){
            const index = Math.floor(Math.random() * (arr.length-2));
            const value = arr.splice(index, 1)[0]; 
            randomArr.push(value);
        }
    }
    const answerArray = pushRandom(randomArr);
    return answerArray;
}

function pushRandom(arr){
    const answerArray = []
    if(questions[questionCounter].type==="multiple"){
        for(let i=0; i<arr.length; i++){
            if(arr[i]!==4){
                answerArray.push(questions[questionCounter].incorrect_answers[arr[i]-1]);
            }else{
                answerArray.push(questions[questionCounter].correct_answer);
            }
        }
    }else{
        for(let i=0; i<arr.length; i++){
            if(arr[i]!==2){
                answerArray.push(questions[questionCounter].incorrect_answers[arr[i]-1]);
            }else{
                answerArray.push(questions[questionCounter].correct_answer);
            }
        }
    }
    return answerArray;
}



