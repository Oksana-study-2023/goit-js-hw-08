import throttle from "lodash.throttle";
import Player from "@vimeo/player";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyLocalStorage = "videoplayer-current-time";

player.on('timeupdate', throttle((time) => {
localStorage.setItem(keyLocalStorage, JSON.stringify(time));
}, 1000));
 
let timeVideo = localStorage.getItem(keyLocalStorage);

if (timeVideo) {
    player.setCurrentTime(JSON.parse(timeVideo).seconds);
}











