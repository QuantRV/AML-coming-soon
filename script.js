// document.querySelector('iframe').contentWindow.document.querySelector('.ytp-chrome-top, .ytp-show-cards-title').style.visibility = "hidden";

function preloaderFunction() {
    document.querySelector(".Rpreload").style.display = "none";
}

function removeTheme() {
    document.querySelector(".theme").style.display = "none";
}

function backgroundAnimation(){
    document.querySelector(".animation_aml").style.zIndex= "-1";
}

function backgroundAnimation2(){
    document.querySelector(".animation_aml").style.zIndex= "0";
}

function myFunction() {
    setTimeout(() => {
        preloaderFunction();
    }, 4070);
    console.log("hii");
    setTimeout(() => {
        removeTheme();
    }, 33000);
    setTimeout(() => {
        backgroundAnimation();
    }, 4070);
    setTimeout(() => {
        backgroundAnimation2();
    }, 27000);
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        videoId: 'TrqNVXHHJFQ',
        playerVars: { 'autoplay': 1, 'playsinline': 1, 'start': 45 },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}
