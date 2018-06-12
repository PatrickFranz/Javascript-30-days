const playerContainer = document.querySelector('.player');
const player = document.querySelector('.player__video');
const playBtn = document.querySelector('.toggle');
const skipBtns = document.querySelectorAll('[data-skip]');
const volumeBtn = document.querySelector('.volume');
const playbackRateBtn = document.querySelector('.playback-rate-btn');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const rangeSliders = document.querySelectorAll('.player__slider');
const fullscreen = document.querySelector('.fullscreen');
let isMousedown = false;
let isFullscreen = false;

function togglePlay(e){
  player.paused ? player.play() : player.pause();
}

function updateButton(){
  player.paused ?
    playBtn.textContent =  '►' :    
    playBtn.textContent = '⏸️' ;
}

function handleRange(e){
  player[this.name] = this.value;

  this.name === 'volume' ? 
      volumeBtn.innerHTML = ` ${Math.floor(this.value * 100)}` :
      playbackRateBtn.innerHTML = ` ${this.value}`
}

function skip(e){
  player.currentTime += Number(this.dataset.skip);
}

function scrubberProgress(){
  const percentComplete = (player.currentTime / player.duration) * 100;
  progressFilled.style.flexBasis = `${percentComplete}%`;
}

function toggleFullscreen(e){
  const fullscreenWidth = window.innerWidth - 200;
  const fullscreenHeight = window.innerHeight;
  console.log(isFullscreen)
  if(isFullscreen){
    //Restore to smaller size
    playerContainer.style.width = '750px';
    playerContainer.style.height = '';

  } else {
    playerContainer.style.width = `${fullscreenWidth}px`;
    playerContainer.style.height = `${fullscreenHeight}px`;
  }
    
  isFullscreen = !isFullscreen;
}

function seekTo(e){
  const progressWidth = progress.offsetWidth;
  const seekLocation = e.offsetX;
  player.currentTime = player.duration * (seekLocation / progressWidth)
}

skipBtns.forEach(btn => btn.addEventListener('click', skip));
rangeSliders.forEach(slider => {
  slider.addEventListener('change', handleRange)
  slider.addEventListener('mousemove', handleRange);
});

playBtn.addEventListener('click', togglePlay);
player.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', scrubberProgress);
progress.addEventListener('click', seekTo);
progress.addEventListener('mousedown', e => isMousedown = true);
document.addEventListener('mouseup', e => isMousedown = false);
progress.addEventListener('mousemove', e => isMousedown && seekTo(e));
player.addEventListener('play', updateButton)
player.addEventListener('pause', updateButton)
fullscreen.addEventListener('click', toggleFullscreen);
