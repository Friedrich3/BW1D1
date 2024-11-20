// const allStars = document.querySelectorAll('.star');
// const ratingStars = document.getElementById("ratingStars");
// //console.log(allStars);
// let count = 0;

// allStars.forEach((star, i) => {
//     star.onclick = function () {
//         //console.log(star);
//         //console.log(i+1);
//         let currentStarPosition = i + 1;
//         count = i; //controllo da dovre parte il counter delle stelle, parte da 0 quindi lo incremento di 1
//         //console.log(currentStarPosition); CORRETTA!
//         allStars.forEach((star, j) => { // FUNZIONE FOR EACH che contiente un if else relativi al colore. Vorrei implementare il colore in maniera diversa.
//             // console.log(j + 1);
//             //console.log(star);
//             if (currentStarPosition >= j + 1) {
//                 star.innerHTML = '<img src="assets/img/star.svg">'; //cambio colore se clicca
//             } else {
//                 star.innerHTML = '&#9734'; // torna normale se clicco una stella minore, ATTENZIONE: se clicco la prima stella rimane colorata.
//             }
//         });
//     }
// });

// allStars.forEach((star, i) => {
//     star.addEventListener("onmouseover", function(){
//         let currentStarPosition = i + 1;
//         allStars.forEach((star, j) => {
//             if (currentStarPosition >= j + 1) {
//                 star.innerHTML = '<img src="assets/img/star.svg">';
//             } else {
//                 if(j+1<count){
//                     star.innerHTML = '<img src="assets/img/star.svg">';
//                 }else{
//                     star.innerHTML = '&#9734';
//                 }
//             }
//         });
//     });
// });

// // Seleziona tutte le stelle
// const stars = document.querySelectorAll("#ratingStars .stella");

// // Funzione per evidenziare le stelle fino a un certo indice
// function highlightStars(index) {
//     stars.forEach((star, i) => {
//         if (i <= index) {
//             star.setAttribute("fill","darkblue");
//         } else {
//             star.setAttribute("fill","none");
//         }
//     });
// }

// // Aggiungi eventi per il passaggio del mouse e il clic
// stars.forEach((star, index) => {
//     // Evidenziazione al passaggio del mouse
//     star.addEventListener("mouseover", () => {
//         highlightStars(index);
//     });

//     // Rimuove l'evidenziazione quando il mouse lascia la riga
//     star.addEventListener("mouseout", () => {
//         star.forEach(s => s.setAttribute("fill","none"));
//     });

//     // Aggiungi o aggiorna il "rating" al clic
//     star.addEventListener("click", () => {
//         star.forEach(s => s.setAttribute("fill","none"));
//         for (let i = 0; i <= index; i++) {
//             stars[i].setAttribute("fill","darkblue");
//         }
//     });
// });
const btnStars = document.querySelectorAll("#ratingStars .star");
const stars = document.querySelectorAll("#ratingStars .stella");
let indexMouseOver = -1; //vuol dire che nessuna stella è puntata
let indexClicked = -1;
let isClicked = false;

// for (let i = 0; i < stars.length; i++) {
//   stars[i].addEventListener("click", function () {
//     indexClicked = i;
//     isClicked = true;
//     for (let i = indexClicked + 1; i < stars.length; i++) {
//       stars[i].setAttribute("fill", "grey");
//     }
//   });
//   stars[i].addEventListener("blur", function () {
//     isClicked = false;
//     for (let i = 0; i < stars.length; i++) {
//       stars[i].setAttribute("fill", "grey");
//     }
//   });
//   stars[i].addEventListener("mouseover", function () {
//     indexMouseOver = i;
//     for (let i = 0; i <= indexMouseOver; i++) {
//       stars[i].setAttribute("fill", "darkblue");
//     }
//   });
//   stars[i].addEventListener("mouseout", function () {
//     if (isClicked) {
//       for (let i = indexMouseOver; i > indexClicked; i--) {
//         stars[i].setAttribute("fill", "grey");
//       }
//     } else {
//       for (let i = 0; i <= indexMouseOver; i++) {
//         stars[i].setAttribute("fill", "grey");
//       }
//     }
//   });
// }
document.addEventListener("load",init());

function init(){
    stars.forEach((star, i) => {
      star.addEventListener("click", function () {
        indexClicked = i;
        isClicked = true;
        btnStars[i].classList.add("active");
        for (let i = indexClicked + 1; i < stars.length; i++) {
          stars[i].classList.remove("active");
        }
        for(let i = 0; i<=indexClicked; i++){
            stars[i].classList.add("active");
        }
      });
      star.addEventListener("blur", function () {
        isClicked = false;
        btnStars[i].classList.remove("active");
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.remove("active");
        }
      });
      star.addEventListener("mouseover", function () {
        indexMouseOver = i;
        for (let i = 0; i <= indexMouseOver; i++) {
          stars[i].classList.add("active");
        }
      });
      star.addEventListener("mouseout", function () {
        if (isClicked) {
          for (let i = indexMouseOver; i > indexClicked; i--) {
            stars[i].classList.remove("active");
          }
        } else {
          for (let i = 0; i <= indexMouseOver; i++) {
            stars[i].classList.remove("active");
          }
        }
      });
    });
}

// const stars = document.querySelectorAll("#ratingStars .stella");
// let indexMouseOver; //vuol dire che nessuna stella è puntata
// let indexClicked;
// let isClicked = false;

// for(let i=0; i<stars.length; i++){
//     stars[i].addEventListener("click",function(){
//         indexClicked = i;
//         isClicked = true;
//         for(let i=indexClicked+1; i<stars.length; i++){
//             stars[i].classList.remove("active");
//         }
//         for(let i=0; i<indexClicked; i++){
//             stars[i].classList.add("active");
//         }
//     });
//     stars[i].addEventListener("blur", function(){
//         isClicked = false;
//         for(let i=0; i<stars.length; i++){
//             stars[i].classList.remove("active");
//         }
//     })
//     stars[i].addEventListener("mouseover", function(){
//         indexMouseOver = i;
//         for(let i=0; i<=indexMouseOver; i++){
//             stars[i].classList.add("active");
//         }
//     });
//     stars[i].addEventListener("mouseout", function(){
//         if(isClicked){
//             for(let i=indexMouseOver; i>indexClicked; i--){
//                 stars[i].classList.remove("active");
//             }
//         }else{
//             for(let i=0; i<=indexMouseOver; i++){
//                 stars[i].classList.remove("active");
//             }
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const stars = document.querySelectorAll('#ratingStars .stella');

//     const updateStars = (index, className) => {
//         stars.forEach((s, i) => {
//             s.classList.toggle(className, i <= index);
//         });
//     };

//     stars.forEach((star, index) => {
//         star.addEventListener('mouseover', () => updateStars(index, "actived"));
//         star.addEventListener('mouseout', () => updateStars(-1, "actived"));
//         star.addEventListener('click', () => {
//             updateStars(index, "actived");
//             updateStars(index, "actived");
//         });
//     });
// });
