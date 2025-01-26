function playMusic() {
    document.getElementById('background-music').play();
}

function showNotification() {
    alert('attacked by oioioioioio meow');
}
function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}
function playGif() {
    document.getElementById('meow-gif').style.display = 'block';
}