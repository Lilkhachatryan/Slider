var slideIndex = 0;
var playing = true;
var slideInterval = setInterval(slider,2000);
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(slider,2000);
}

pauseButton.onclick = function() {
  if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

function changePhoto(n) {
  slideIndex += n
  pauseSlideshow();
  slider()
}

function currentSlide(n) {
  slideIndex = n
  pauseSlideshow();
  slider();
}

function slider() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  if (slideIndex < 1) {slideIndex = slides.length}  

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





var slideIndex2 = 0;
var playing2 = true;
var slideInterval2 = setInterval(slider2,2000);
var pauseButton2 = document.getElementById('pause2');

function pauseSlideshow2() {
    pauseButton2.innerHTML = 'Play';
    playing2 = false;
    clearInterval(slideInterval2);
}

function playSlideshow2() {
    pauseButton2.innerHTML = 'Pause';
    playing2 = true;
    slideInterval2 = setInterval(slider2,2000);
}

pauseButton2.onclick = function() {
    if(playing2) {
    pauseSlideshow2();
  } else {
    playSlideshow2();
  }
};

function changePhoto2(n) {
  slideIndex2 += n;
  pauseSlideshow2();
  slider2()
}

function currentSlide2(n) {
  slideIndex2 = n
  pauseSlideshow2();
  slider2();
}

function slider2() {
  var photo = document.getElementById("photo");
  var imgs = document.getElementsByClassName("selectImgs");
  var controlImgs = document.getElementsByClassName("controlImgs");
  
  slideIndex2++;
  if (slideIndex2 > imgs.length) {slideIndex2 = 1}    
  if (slideIndex2 < 1) {slideIndex2 = imgs.length} 

  for (let i = 0; i < controlImgs.length; i++) {
    controlImgs[i].className = controlImgs[i].className.replace(" activeImg", "");
  }

  controlImgs[slideIndex2-1].className += " activeImg";
  photo.src = imgs[slideIndex2-1].src;
  document.getElementById('number').innerHTML = slideIndex2 + ' / 3'

}