const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;

  arrow.addEventListener("click", () => {

    const imageItem = movieLists[i].querySelectorAll("img").length;

    const widthRatio = Math.floor(window.innerWidth / 300);

    const style = window.getComputedStyle(movieLists[i]);
    const matrix = new DOMMatrixReadOnly(style.transform);

    const currentX = matrix.m41;

    clickCounter++;

    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${currentX - 300}px)`
    } else {
      movieLists[i].style.transform = "translateX(0px)";
      clickCounter = 0;
    }

  });

});


// DARK / LIGHT MODE TOGGLE

const toggle = document.querySelector(".toggle");
const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(
".container, .navbar, .sidebar, .sidebar i, .movie-list-title, .movie-list-filter,.arrow"
);

toggle.addEventListener("click", () => {

  items.forEach((item) => {
    item.classList.toggle("active");
  });

  ball.classList.toggle("active");

});