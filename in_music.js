var nowplaying=false
const mMusic = new Audio('bgm01jazz.mp3');
mMusic.loop = true;
function MusicToggle(){
  nowplaying = !nowplaying;
  if (nowplaying) {
    mMusic.play();
  } else {
    mMusic.pause();
  }
}
