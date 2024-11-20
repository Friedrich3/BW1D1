const allStars = document.querySelectorAll('.star');
//console.log(allStars);

allStars.forEach((star, i) => {
    star.onclick = function () {
        //console.log(star);
        //console.log(i+1);
        let currentStarPosition = i + 1; //controllo da dovre parte il counter delle stelle, parte da 0 quindi lo incremento di 1
        //console.log(currentStarPosition); CORRETTA!
        allStars.forEach((star, j) => { // FUNZIONE FOR EACH che contiente un if else relativi al colore. Vorrei implementare il colore in maniera diversa.
            // console.log(j + 1);
            //console.log(star);
            if (currentStarPosition >= j + 1) {
                star.innerHTML = '&#9733'; //cambio colore se clicca
            } else {
                star.innerHTML = '&#9734'; // torna normale se clicco una stella minore, ATTENZIONE: se clicco la prima stella rimane colorata.
            }
        });
    }
})