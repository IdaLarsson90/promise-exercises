const audioElem = document.querySelector('#player');

async function getToken () {
    const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
    const data = await response.json();
    // getTitle(data.token, searchedInput);
    // console.log(data.token);
    return data.token;
}

async function getTitle (token, searchedInput) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchedInput}&type=track`, {
        "headers": {
        "authorization": `Bearer ${token}`
        }
    });;
    const data = await response.json();
    
    for (let i = 0; i < data.tracks.items.length; i++) {
        if (data.tracks.items[i].preview_url != null) {
            audioElem.setAttribute('src', data.tracks.items[i].preview_url);   
            audioElem.play();
            const dataItems = data.tracks.items[i];
        // updateSongDetails(data.tracks.items[i]);
        return dataItems;
        }
    }
}
export { getToken, getTitle };