
const changeColorBtn = document.querySelector('#change-color');
  
function changeColor() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple','white'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

changeColorBtn.addEventListener('click', changeColor);

var playersButton = document.getElementById("playersButton");
var playersSection = document.getElementById("players");

playersButton.addEventListener("click", function() {
  if (playersSection.style.display === "none") {
    playersSection.style.display = "block";
  } else {
    playersSection.style.display = "none";
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}