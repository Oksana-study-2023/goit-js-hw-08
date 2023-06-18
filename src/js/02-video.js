import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyLocalStorage = "videoplayer-current-time";
function reloadPage(time) {
    if (time) {
    player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(keyLocalStorage, JSON.stringify(data.seconds));
}), 1000);


player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});    
    }

}










