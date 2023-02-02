
//Youtube API

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// onYouTubePlayerAPIReady ** It is from Youtube Iframe Player API ** 
// DO NOT MISS THE SPELLS

function  onYouTubePlayerAPIReady(){
 new YT.Player('player', {
    videoId: 'klfGix73GOA',
    playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady : onPlayerReady,
    }
  })
}

let onPlayerReady = (e) => {
  e.target.playVideo();
  e.target.mute();
}

