window.addEventListener("keydown", playSound );
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  this.classList.remove('playing');
}
function playSound(e){
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  const key = document.querySelector(`.btn[data-key="${e.which}"]`);
  if(!audio){ return;}
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

