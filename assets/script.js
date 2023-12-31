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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector("#banner img");
const bannerTxt = document.querySelector("#banner p");

let currentSlide = 0;
const maxSlides = slides.length;

/* bannerSlides */
function bannerSlides() {
  bannerImg.src = "/assets/images/slideshow/" + slides[currentSlide].image;
  bannerTxt.innerHTML = slides[currentSlide].tagLine;
  selected();
}

/* arrowLeft */
arrowLeft.addEventListener("click", function () {
  if (currentSlide == 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  bannerSlides();
});

/* arrowRight */
arrowRight.addEventListener("click", function () {
  if (currentSlide == maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  bannerSlides();
});

/* selected */
function selected() {
  const dots = document.getElementsByClassName("dot");
  for (const dot of dots) {
    dot.classList.remove("dot_selected");
  }
  dots[currentSlide].classList.add("dot_selected");
}

/* bannerDots */
function bannerDots() {
  const dots = document.querySelector(".dots");
  for (const slide of slides) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
  dots.children[0].classList.add("dot_selected");
}
bannerDots();
