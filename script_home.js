document.addEventListener('scroll', f)

function f() {
  var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
  if (isInFullScreen) {
    window.scrollTo(0,document.body.scrollHeight);
    document.style.cursor = "none"
  } else {
    window.scrollTo(0,0);
  }
}

function e() {
  lastKnownScrollPosition = window.scrollY;
  document.getElementById('div1').style.display = "block"
  document.getElementById('div2').style.display = "block"
  document.getElementById('movie1').play()
  document.getElementById('movie2').play()
  document.getElementById('movie3').play()
  document.getElementById('movie4').play()
  var docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
  else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
  else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  window.scrollTo(0,document.body.scrollHeight);
  document.style.cursor = "none"
}