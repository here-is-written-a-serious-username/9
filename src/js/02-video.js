import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";
const getItem = localStorage.getItem(CURRENT_TIME_KEY);

function currentTime (currentTime) {
    localStorage.setItem(CURRENT_TIME_KEY, currentTime.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(getItem).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});