
    const ratingStars = [...document.getElementsByClassName("rating__star")];
    console.log(ratingStars);
    const ratingStars1 =  ratingStars.reverse()
    console.log(ratingStars1);
    const container = document.querySelector('.container');
    const cuerpo = document.querySelector('.container');
    const resultado = document.getElementById('rating');
    function rating() {  
        for (const ratevalue of ratingStars1) {
            ratevalue.onclick = () =>{
                posicion = ratingStars1.indexOf(ratevalue);
                resultado.innerHTML =`${posicion+1}/5`
                    for (const star of ratingStars1) {
                    star.classList.remove('fas');
                }
                for (let i = 0; i < ratingStars1.length; i++) {
                    if (i<=posicion) {
                    ratingStars1[i].classList.add('fas');
                    }
                }
            }
        }
    }

    function restart() {
            resultado.innerHTML =`0/5`;
            for (const star of ratingStars1) {
                star.classList.remove('fas');
            }
    }


/*  ejemplo con map
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
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
executeRating(ratingStars); */