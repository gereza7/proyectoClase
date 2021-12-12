AFRAME.registerComponent('play-pause', {
  init: function(){
    var myVideo = document.querySelector('#video');
    var videoControls = document.querySelector('#video-controls');
    this.el.addEventListener('click', function(){
      if(myVideo.paused){
        myVideo.play();
        document.getElementById('video-show').setAttribute("visible",true,);
        videoControls.setAttribute('src', '#pause')
      }else {
        myVideo.pause();
        videoControls.setAttribute('src', '#play1');
        document.getElementById('video-show').setAttribute("visible",false,);

      }
    })
  }
})




let vid = document.getElementById('video');


function playFunction(){
  document.getElementById('video').setAttribute("visible",true,);
  } 


AFRAME.registerComponent('button-play',)