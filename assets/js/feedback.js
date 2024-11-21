const inputFeedback = document.getElementById("inputFeedback");
let isFocus = false;


document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.ratingStars .star'); 
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