
    const ratingStars = [...document.getElementsByClassName("rating__star")];
    const ratingStars1 =  ratingStars.reverse();
    const cuerpo = document.getElementById('cuerpo');
    const resultado = document.getElementById('rating');
    function rating(stars) {  
        for (const ratevalue of stars) {
            ratevalue.onclick = () =>{
                posicion = stars.indexOf(ratevalue);
                resultado.innerHTML =`${posicion+1}/5`
                    for (const star of stars) {
                    star.classList.remove('fas');
                }
                for (let i = 0; i < stars.length; i++) {
                    if (i<=posicion) {
                    stars[i].classList.add('fas');
                    }
                }
            }
        }
    } 
    rating(ratingStars1);

    function restart() {
            resultado.innerHTML =`0/5`;
            for (const star of ratingStars1) {
                star.classList.remove('fas');
            }
    }

    cuerpo.addEventListener('mouseleave', restart);


/*  function executeRating(stars) {
const starClassActive = "rating__star fas fa-star";
const starClassInactive = "rating__star far fa-star";
const starsLength = stars.length;
let i;
stars.map((star) => {
star.onclick = () => {
    i = stars.indexOf(star);

    if (star.className===starClassInactive) {
    for (i; i >= 0; --i) stars[i].className = starClassActive;
    } else {
    for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
    }
};
});
}
executeRating(ratingStars); 
 */