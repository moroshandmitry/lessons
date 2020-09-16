function squareOfNumber(count) {
  let n = 0;
  for (let i = 0; i <= count; i++) {
    console.log(i ** 2);
  }
}

squareOfNumber(9);

const images = [
  'http://www.sololearn.com/uploads/slider/1.jpg', 
  'http://www.sololearn.com/uploads/slider/2.jpg', 
  'http://www.sololearn.com/uploads/slider/3.jpg'
];
let num = 0;
function next() {
  const slider = document.querySelector('.my-slider-img');
  num++;
  if(num >= images.length) {
      num = 0;
  }
  slider.src = images[num];
}
function prev() {
  const slider = document.querySelector('.my-slider-img');
  num--;
  if(num < 0) {
      num = images.length-1;
  }
  slider.src = images[num];
}

setInterval(function(){
  const slider = document.querySelector('.my-slider-img');
  num++;
  if(num >= images.length) {
      num = 0;
  }
  slider.src = images[num];
}, 3000);