const slider = document.querySelectorAll('.img');
const imageContainer = document.querySelectorAll('.crousel-item');

let isAutoPlaying = false;
let intervalId;
let counter = 0;

slider.forEach((slide,index) => {
       slide.style.left = `${index * 100}%`;
});

const next = () => {
  counter++;
  if(counter > slider.length - 1) {
    alert("No more images are left"); 
    counter = slider.length - 1;
    return;
  }
  slideShow();
  checked(counter);
  updateRadioButtons();
}

const prev = () => {
  counter--;
  if(counter < 0) {
    alert('can not go back');
    counter = 0;
    return;
  }
  slideShow();
  checked(counter);
  updateRadioButtons();
}

function play() {

if(isAutoPlaying) return;

isAutoPlaying = true;
  intervalId = setInterval(() => {
    if(counter >= slider.length - 1) {
      clearInterval(intervalId);
      isAutoPlaying = false;
       return;
    }

    counter++;
    slideShow();
    updateRadioButtons();
  }, 2000);
 }

function pause() {
  clearInterval(intervalId);
  isAutoPlaying = false;
}


const slideShow = () => {
slider.forEach((slide) => {
  slide.style.transform = `translateX(-${counter * 100}%)`;
});
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    next();
    checked(counter);
    updateRadioButtons();
  } else if(event.key === 'ArrowLeft') {
    prev();
    updateRadioButtons();
  }
});

function goToSlide(slideIndex) {
    counter = slideIndex;
    slideShow();
}

function checked(counter) {
  const radioButton = document.getElementById(`radio${counter}`);
  if(radioButton) {
    radioButton.checked = true;
  }
}

function updateRadioButtons() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });

  const radioButton = document.getElementById(`radio${counter}`);
  if(radioButton) {
    radioButton.checked = true;
  }
}
