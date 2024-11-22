const inputFeedback = document.getElementById("inputFeedback");
const btnFeedback = document.getElementById("feedbackButton");
const stars = document.querySelectorAll('.ratingStars .star'); 
let isFocus = false;

document.addEventListener('DOMContentLoaded', () => {
 
    const updateStars = (index, className) => { 
        stars.forEach((s, i) => {
            s.classList.toggle(className, i <= index);
        });
    };

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => updateStars(index, 'hover'));              //EVENT LISTENER CHE GESTISCE IL FUNZIONAMENTO DELLE STELLE 
        star.addEventListener('mouseout', () => updateStars(-1, 'hover'));
        star.addEventListener('click', () => {
            updateStars(index, 'selected');
            updateStars(index, 'hover');
        });
        star.addEventListener("blur" ,() => {
            if(!isFocus){
                updateStars(-1, 'selected');
                updateStars(-1, 'hover');
            }       
        });
       
    });
    inputFeedback.addEventListener("mouseover", function(){                             //EVENT LISTENER CHE GESTISCE IL FOCUS delle stelle relativo alla imput box
        isFocus = true; 
    });
    inputFeedback.addEventListener("mouseout", function(){
        isFocus = false;
    });
    inputFeedback.addEventListener("blur", function(){
        if(inputFeedback.value === "" && isFocus === false){
            updateStars(-1, 'selected');
            updateStars(-1, 'hover');
        }
    });
    btnFeedback.addEventListener("mouseover", function(){                                   //EVent listener che gestisce il focus sul bottone
        isFocus = true;
    });
    
});


function submitForm(){                                                                  //FUNZIONE Onclick sul bottone che colleziona dati se il feedback è stato inserito e collega ad un altra pagina
    if(stars[0].classList.contains("selected")){
    localStorage.setItem("votoForm" , countStar());
    localStorage.setItem("commentForm", inputFeedback.value);
    window.location.href = "../../thanks.html";                         
}else{
    window.location.href = "../../welcome.html";
}
}
function countStar(){                                                                   //funzione per ricavare il "voto ricevuto"
    let counterStar = 0;
    stars.forEach (element =>{
        if(element.classList.contains("selected")){
            counterStar += 1;
        }    
    });
    return counterStar;
};