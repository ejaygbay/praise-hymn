const loadSongs = (id) => {
    let parent_ele = document.getElementById(id);
    let count = 1;

    if (songs[id]) {
        parent_ele.innerHTML = "";
        let song_set = songs[id];
        for (song in song_set) {
            let song_title = song_set[song].title;
            let author = song_set[song].author;

            let html = `<article class="song">
                <div class="title-sec" onclick="openFullSong('${song_title}')">
                    <span class="song-num">${count}.</span>
                    <div>
                        <div class="song-title">${song_title}</div>
                        <div class="author">By: ${author}</div>
                    </div>
                </div>
                <div class="action-sec">
                    <div>
                        <ion-icon class="play action-icons" name="play"></ion-icon>
                        <ion-icon class="stop action-icons" name="stop"></ion-icon>
                    </div>
                    <div>
                        <ion-icon class="unlike action-icons" name="heart-outline"></ion-icon>
                        <ion-icon class="like action-icons" name="heart"></ion-icon>
                    </div>
                </div>
            </article>`;

            parent_ele.insertAdjacentHTML('beforeend', html);
            count += 1;
        }
    }
}

// loadSongs('worship');

const openFullSong = (id) => {
    console.log(id);
}