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
    pauseSlideshow();
    slider(slideIndex += n)
}

function currentSlide(n) {
    pauseSlideshow();
    slider(slideIndex = n);
}

function slider() {
  var photo = document.getElementById("photo");
  var imgs = document.getElementsByClassName("selectImgs");
  var controlImgs = document.getElementsByClassName("controlImgs");
  
  slideIndex++;
  if (slideIndex > imgs.length) {slideIndex = 1}    

  for (let i = 0; i < controlImgs.length; i++) {
    controlImgs[i].className = controlImgs[i].className.replace(" activeImg", "");
  }

  controlImgs[slideIndex-1].className += " activeImg";
  photo.src = imgs[slideIndex-1].src;

}
