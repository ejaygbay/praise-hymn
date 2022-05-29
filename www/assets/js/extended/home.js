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
                    <div id="${song_title}_parent" class="" onclick="actionButtonsHandler(event)">
                        <ion-icon id="${song_title}_play" class="play-icon action-icons" name="play"></ion-icon>
                        <ion-icon id="${song_title}_stop" class="stop-icon action-icons" name="stop"></ion-icon>
                    </div>
                    <div>
                        <ion-icon id="${song_title}_unlike" class="unlike-icon action-icons" name="heart-outline"></ion-icon>
                        <ion-icon id="${song_title}_like" class="like-icon action-icons" name="heart"></ion-icon>
                    </div>
                </div>
            </article>`;

            parent_ele.insertAdjacentHTML('beforeend', html);
            count += 1;
        }

        addEventToPlayIcon('songs-section');
        addEventToStopIcon('songs-section');
        addEventToLikeIcon('songs-section');
        addEventToUnlikeIcon('songs-section');
    }
}

const openFullSong = (id) => {
    console.log(id);
}

const addEventToPlayIcon = (section) => {
    console.log(document.querySelectorAll(`.${section} .play`))
    document.querySelectorAll(`.${section} .play`).forEach(ele => {
        ele.addEventListener("click", e => {
            console.log('sec:::', section);
            console.log(e.target)
                // playSong(e, section);
        })
    })
}

const addEventToStopIcon = (section) => {
    document.querySelectorAll(".stop").forEach(ele => {
        ele.addEventListener("click", e => {
            stopSong(e, section);
        })
    })
}

const addEventToUnlikeIcon = (section) => {
    document.querySelectorAll(".unlike").forEach(ele => {
        ele.addEventListener("click", e => {
            let parent_class = e.target.parentElement.className;
            songs[parent_class.split("-")[0].trim()].like = true;
            hideIcon(`.${section} .${parent_class} .unlike`);
            showIcon(`.${section} .${parent_class} .like`);
            findFavoritSongs();
        })
    })
}

const addEventToLikeIcon = (section) => {
    document.querySelectorAll(".like").forEach(ele => {
        ele.addEventListener("click", e => {
            let parent_class = e.target.parentElement.className;
            let splited_parent_class = parent_class.split("-")[0].trim();
            songs[splited_parent_class].like = false;
            hideIcon(`.${section} .${parent_class} .like`);
            showIcon(`.${section} .${parent_class} .unlike`);

            if (section === "favorites") {
                let fav_play = document.querySelector(`.${section} .${splited_parent_class} .stop`);
                hideIcon(`.${section} .${parent_class}-tr`);
                if (fav_play.style.display === "block") {
                    stopSongOnSectionSwitch();
                }

                let song_tr = document.querySelectorAll(`.${section} tr td:first-child`);
                let index = 0;
                song_tr.forEach(ele => {
                    if (ele.parentElement.style.display !== "none") {
                        ele.innerHTML = index + 1;
                        index += 1;
                    }
                })
            }

            findFavoritSongs();
        })
    })
}

const actionButtonsHandler = (e) => {
    let id = e.target.id.split('_');
    removePlayingClass();

    if (id[1] === 'play') {
        addPlayingClass(`${id[0]}_parent`, 'playing');
    }
}

const addPlayingClass = (id, name) => document.getElementById(id).classList.add(name);

const removePlayingClass = () => {
    document.querySelectorAll('.playing').forEach(ele => ele.classList.remove('playing'))
}

loadSongs('worship');