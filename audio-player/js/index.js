const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#titleSearch');
const playBtn = document.querySelector('#play');
const backwardBtn = document.querySelector('#backward');
const forwardBtn = document.querySelector('#forward');
const audioElem = document.querySelector('#player');
const playIconElem = document.querySelector('#playIcon');

let isPlaying = false;

import { getToken, getTitle } from './modules/api.js';
import { updateSongDetails, updateProgress } from './modules/display.js';

searchBtn.addEventListener('click', async () => {
    const token = await getToken();
    const dataItem = await getTitle(token, searchInput.value);
    await updateSongDetails(dataItem);
});

playBtn.addEventListener('click', () => {
    if (isPlaying == true) {
        pauseSong();
    } else {
        playSong();
    }
});

backwardBtn.addEventListener('click', () => {
    console.log('backward');
    skipBackwards();
});

forwardBtn.addEventListener('click', () => {
    console.log('forward');
    skipForwards();
});

audioElem.addEventListener('timeupdate', updateProgress)


function playSong () {
    audioElem.play();
    playIconElem.setAttribute('class', 'fas fa-pause');
    isPlaying = true;
}

function pauseSong() {
    isPlaying = false;
    playIconElem.setAttribute('class', 'fas fa-play');
    audioElem.pause();
}

function skipBackwards () {
    audioElem.currentTime = audioElem.currentTime - 10;
}

function skipForwards () {
    audioElem.currentTime = audioElem.currentTime + 10;
}