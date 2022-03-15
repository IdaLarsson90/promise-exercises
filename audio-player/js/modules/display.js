const titleElem = document.querySelector('#title');
const artistElem = document.querySelector('#artist');
const coverElem = document.querySelector('#albumCover');
const progressElem = document.querySelector('.progress');

function updateSongDetails(data) {
    titleElem.innerText = data.name;
    artistElem.innerText = data.artists[0].name;
    coverElem.setAttribute('src', data.album.images[1].url)
    // playSong();
}

function updateProgress (e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime /duration) *100;
    progressElem.style.width = `${progressPercent}%`;
}

export { updateSongDetails, updateProgress };