const loadSongs = (id) => {
    let parent_ele = document.getElementById(id);
    let count = 1;

    if (songs[id]) {
        parent_ele.innerHTML = "";
        let song_group = songs[id];

        for (song in song_group) {
            let song_title = song_group[song].title;
            let author = song_group[song].author;

            let html = `<article class="song">
                <div class="title-sec" onclick="openFullSong('${id}', '${song}')">
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

const openFullSong = (song_group, song_id) => {
    switchSection('song-lyrics-section');

    let song = songs[song_group][song_id];
    let song_lyrics_keys = Object.keys(song);
    let stanzas = song.stanzas;
    let stanzas_keys = Object.keys(stanzas);
    let title_header = `<div>
        <h2 class="lyric-title">${song.title}</h2>
        <article class="important-info">
            <span>By: ${song.author}</span>
            <a href="#">Read History</a>
        </article>
    </div>`;
    let song_ele = document.querySelector(".song-lyrics");

    song_ele.innerHTML = "";
    song_ele.insertAdjacentHTML("beforeend", title_header);

    if (song_lyrics_keys.includes('chorus')) {
        let stanza1 = `<div class=stanza>
            <span>1.</span>
            <article class="lyric">${stanzas[1]}</article>
        </div>`;

        let chorus = `<div class=stanza>
            <span>Chorus</span>
            <article class="lyric">${song.chorus}</article>
        </div>`;

        song_ele.insertAdjacentHTML("beforeend", stanza1);
        if (song.chorus.length > 0) {
            song_ele.insertAdjacentHTML("beforeend", chorus);
        }

        for (let i = 1; i < stanzas_keys.length; i++) {
            let html = `<div class=stanza>
                <span>${i + 1}.</span>
                <article class="lyric">${stanzas[i + 1]}</article>
            </div>`;
            song_ele.insertAdjacentHTML("beforeend", html);
        }
    } else {
        stanzas_keys.forEach((ele, index) => {
            let html = `<div class=stanza>
            <span>${index + 1}</span>
            <article class="lyric">${stanzas[ele]}</article>
        </div>`;
            song_ele.insertAdjacentHTML("beforeend", html);
        })
    }
}

// switchSection('song-lyrics-section');

const addEventToSongTitl = () => {
    document.querySelectorAll(".song-title").forEach(ele => {
        ele.addEventListener("click", e => {
            let id = e.target.id;
            let song_lyrics_keys = Object.keys(songs[id]);
            let stanzas = songs[id].stanzas;
            let song_ele = document.querySelector(".song");
            let stanzas_keys = Object.keys(stanzas);
            let title_header = `<div>
                <h5>${songs[id].title}</h5>
                <article class="important-info">
                    <span>By: ${songs[id].author}</span>
                    <a href="#">Read History</a>
                </article>
            </div>`;
            let play_btn = `<a class="${id} btn-floating btn-large waves-effect waves-light">
                <i class="material-icons play action-icons">play_arrow</i>
                <i class="material-icons stop action-icons">stop</i>
            </a>`;

            previous_section = current_section;

            song_ele.innerHTML = "";
            song_ele.insertAdjacentHTML("beforeend", title_header);
            song_ele.insertAdjacentHTML("beforeend", play_btn);

            if (song_lyrics_keys.includes('chorus')) {
                let stanza1 = `<div class=stanza>
                    <span>1.</span>
                    <article>
                        ${stanzas[1]}
                    </article>
                </div>`;

                let chorus = `<div class=stanza>
                    <span>Chorus</span>
                    <article>
                        ${songs[id].chorus}
                    </article>
                </div>`;

                song_ele.insertAdjacentHTML("beforeend", stanza1);
                if (songs[id].chorus.length > 0) {
                    song_ele.insertAdjacentHTML("beforeend", chorus);
                }

                for (let i = 1; i < stanzas_keys.length; i++) {
                    let html = `<div class=stanza>
                        <span>${i + 1}.</span>
                        <article>
                            ${stanzas[i + 1]}
                        </article>
                    </div>`;
                    song_ele.insertAdjacentHTML("beforeend", html);
                }
            } else {
                stanzas_keys.forEach((ele, index) => {
                    let html = `<div class=stanza>
                    <span>${index + 1}</span>
                    <article>
                        ${stanzas[ele]}
                    </article>
                </div>`;
                    song_ele.insertAdjacentHTML("beforeend", html);
                })
            }

            document.querySelector(`.show`).classList.remove('show');
            document.querySelector(`.song`).classList.add("show");
            addEventToPlayIcon('song');
            addEventToStopIcon("song");
            stopSongOnSectionSwitch();
        })
    })
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