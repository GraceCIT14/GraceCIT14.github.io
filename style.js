// JavaScript for interactivity

/*Function to change background color on header click
function changeBackgroundColor() {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
  
    header.addEventListener("click", function() {
      body.style.backgroundColor = getRandomColor();
    });
  }
  
  // Function to generate random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Call the function to enable the background color change on header click
  document.addEventListener("DOMContentLoaded", function() {
    changeBackgroundColor();
  });*/

// Javascript for image slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"
}