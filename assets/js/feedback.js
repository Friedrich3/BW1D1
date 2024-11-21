const inputFeedback = document.getElementById("inputFeedback");
const btnFeedback = document.getElementById("feedbackButton");
const stars = document.querySelectorAll('.ratingStars .star'); 
let isFocus = false;

document.addEventListener('DOMContentLoaded', () => {

    inputFeedback.addEventListener("mouseover", function(){
        isFocus = true;
    });
    inputFeedback.addEventListener("mouseout", function(){
        isFocus = false;
    });
    inputFeedback.addEventListener("blur", function(){
        if(inputFeedback.value === ""){
            updateStars(-1, 'selected');
            updateStars(-1, 'hover');
        }
    });
    
    
    const updateStars = (index, className) => { 
        stars.forEach((s, i) => {
            s.classList.toggle(className, i <= index);
        });
    };

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => updateStars(index, 'hover'));
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
});


function submitForm(){
    if(stars[0].classList.contains("selected")){
    localStorage.setItem("votoForm" , countStar());
    localStorage.setItem("commentForm", inputFeedback.value);
    window.location.href = "../../thanks.html"
}
}
function countStar(){
    let counterStar = 0;
    stars.forEach (element =>{
        if(element.classList.contains("selected")){
            counterStar += 1;
        }    
    });
    return counterStar;
};