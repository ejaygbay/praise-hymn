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
                <div id="${song}_parent" class="action-sec" onclick="actionButtonsHandler(event)">
                    <ion-icon id="${song}_play" class="play-icon action-icons" name="play"></ion-icon>
                    <ion-icon id="${song}_unlike" class="unlike-icon action-icons" name="heart-outline"></ion-icon>
                </div>
            </article>`;

            parent_ele.insertAdjacentHTML('beforeend', html);
            count += 1;
        }

        // addEventToPlayIcon('songs-section');
        // addEventToStopIcon('songs-section');
        // addEventToLikeIcon('songs-section');
        // addEventToUnlikeIcon('songs-section');
    }
}

const openFullSong = (id) => {
    console.log(id);
}

const addEventToPlayIcon = (section) => {
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

    if (id[1] === 'play') {
        removePlayingClass();
        addClass(`${id[0]}_parent`, 'playing');
        setAttributeValue(`#${id[0]}_play`, 'name', 'stop');
        setAttributeValue(`#${id[0]}_play`, 'id', `${id[0]}_stop`);
    } else if (id[1] === 'stop') {
        removePlayingClass();
    } else if (id[1] === 'like') {
        removeFavoriteClass(`${id[0]}_parent`, 'favorite');
        setAttributeValue(`#${id[0]}_like`, 'name', 'heart-outline');
        setAttributeValue(`#${id[0]}_like`, 'id', `${id[0]}_unlike`);
    } else if (id[1] === 'unlike') {
        addClass(`${id[0]}_parent`, 'favorite');
        setAttributeValue(`#${id[0]}_unlike`, 'name', 'heart');
        setAttributeValue(`#${id[0]}_unlike`, 'id', `${id[0]}_like`);
    }
}

const addClass = (id, name) => document.getElementById(id).classList.add(name);

const setAttributeValue = (ele, attr, value) => document.querySelector(ele).setAttribute(attr, value);

const removePlayingClass = () => {
    document.querySelectorAll('.playing').forEach(ele => {
        let id = ele.id.split('_');
        document.getElementById(`${id[0]}_parent`).classList.remove('playing');

        setAttributeValue(`#${id[0]}_stop`, 'name', 'play');
        setAttributeValue(`#${id[0]}_stop`, 'id', `${id[0]}_play`);
    })
}

const removeFavoriteClass = (id, name) => document.getElementById(id).classList.remove(name);

loadSongs('worship');