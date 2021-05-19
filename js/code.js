const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingStars1 =  ratingStars.reverse();
const cuerpo = document.getElementById('cuerpo');
const resultado = document.getElementById('rating');
function rating(stars) {  
    restart();
    for (let i = 0; i < stars; i++) {
        ratingStars1[i].classList.add('fas');
        resultado.innerHTML =`${i+1}/5`
    }
}

function restart() {
       resultado.innerHTML =`0/5`
        for (const star of ratingStars1) {
            star.classList.remove('fas');
        }
}

    cuerpo.addEventListener('mouseleave', restart);

