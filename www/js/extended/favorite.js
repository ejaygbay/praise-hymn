const displayFavoriteSongs = (section_selector) => {
    findFavoritSongs();
    document.querySelector(section_selector).innerHTML = "";
    favorites.forEach((ele, index) => {
        let html = `<tr class="${ele}-favorite-tr">
            <td>${index + 1}.</td>
            <td class="song-title" id=${ele}>${songs[ele].title}</td>
            <td class=${ele}>
                <span class="material-icons play action-icons">play_arrow</span>
                <span class="material-icons stop action-icons">stop</span>
            </td>
            <td class=${ele}-favorite>
                <span class="material-icons action-icons like" style="display: block">favorite</span>
                <span class="material-icons action-icons unlike" style="display: none">favorite_border</span>
            </td>
        </tr>`;

        let html2 = `<tr class="${ele}-favorite-tr">
            <td>${index + 1}.</td>
            <td>
                <p class="song-title" id=${ele}>${songs[ele].title}</p> <span class=author>By: ${songs[ele].author}</span> </td>
            <td class=${ele}>
                <span class="material-icons play action-icons">play_arrow</span>
                <span class="material-icons stop action-icons">stop</span>
            </td>
            <td class=${ele}-favorite>
                <span class="material-icons action-icons like" style="display: block">favorite</span>
                <span class="material-icons action-icons unlike" style="display: none">favorite_border</span>
            </td>
        </tr>`;

        document.querySelector(section_selector).insertAdjacentHTML("beforeend", html2);
    })

    addEventToSongTitle();
    addEventToPlayIcon('favorites');
    addEventToStopIcon('favorites');
    addEventToLikeIcon('favorites');
    addEventToUnlikeIcon('favorites');
}