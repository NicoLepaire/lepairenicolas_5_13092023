const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*

let currentIndex = 0;
const maxSlides = slides.length - 1;

console.log(slides, slides.length - 1, slides[currentIndex], slides[currentIndex].tagLine);

*/

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector("#banner img");
const bannerTxt = document.querySelector("#banner p");

let i = 0;
const maxSlides = slides.length;

function innerSlides() {
  bannerImg.innerHTML = slides[i].image;
  bannerTxt.innerHTML = slides[i].tagLine;
}

arrowLeft.addEventListener("click", function () {
  if (i == 0) {
    i = maxSlides - 1;
  } else {
    i--;
  }
  innerSlides();
});

arrowRight.addEventListener("click", function () {
  if (i == maxSlides - 1) {
    i = 0;
  } else {
    i++;
  }
  innerSlides();
});
