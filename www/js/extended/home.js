const displaySongs = (section_selector) => {
    document.querySelector(section_selector).innerHTML = "";
    document.querySelector("#song-num").innerHTML = songs_keys.length;

    songs_keys.forEach((ele, index) => {
        let like_and_unlike = `<span class="material-icons action-icons like">favorite</span>
            <span class="material-icons action-icons unlike">favorite_border</span>`;
        if (songs[ele].like) {
            like_and_unlike = `<span class="material-icons action-icons like" style="display: block">favorite</span>
            <span class="material-icons action-icons unlike" style="display: none">favorite_border</span>`;
        }

        // let html = `<tr>
        //         <td>${index + 1}.</td>
        //         <td class="song-title" id=${ele}>${songs[ele].title}</td>
        //         <td class=${ele}>
        //             <span class="material-icons play action-icons">play_arrow</span>
        //             <span class="material-icons stop action-icons">stop</span>
        //         </td>
        //         <td class=${ele}-favorite>
        //             ${like_and_unlike}
        //         </td>
        //     </tr>`;

        

        let html = `<tr>
            <td>${index + 1}.</td>
            <td>
                <p class="song-title" id="${ele}">${songs[ele].title}</p>
                <span class="author">By: ${songs[ele].author}</span>
            </td>
            <td class=${ele}>
                <span class="material-icons play action-icons">play_arrow</span>
                <span class="material-icons stop action-icons">stop</span>
            </td>
            <td class="${ele}-favorite">${like_and_unlike}</td>
        </tr>`;
        document.querySelector(section_selector).insertAdjacentHTML("beforeend", html);
    })
    addEventToSongTitle();
    addEventToPlayIcon('songs');
    addEventToStopIcon('songs');
    addEventToLikeIcon('songs');
    addEventToUnlikeIcon('songs');

}
displaySongs(".songs tbody");