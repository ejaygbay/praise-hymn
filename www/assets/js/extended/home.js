const loadSongs = (id) => {
    let parent_ele = document.getElementById(id);
    let count = 1;

    if (songs[id]) {
        parent_ele.innerHTML = "";
        let all_songs = songs[id];

        for (song in all_songs) {
            let song_title = all_songs[song].title;
            let author = all_songs[song].author;

            let html = `<article class="song">
                <div class="title-sec" onclick="openFullSong('${song}_${id}')">
                    <span class="song-num">${count}.</span>
                    <div>
                        <div class="song-title">${song_title}</div>
                        <div class="author">By: ${author}</div>
                    </div>
                </div>
                <div id="${song}_parent" class="action-sec" onclick="actionButtonsHandler(event)">
                    <ion-icon id="${song}_play_${id}" class="play-icon action-icons" name="play"></ion-icon>
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

const openFullSong = (song_id) => {
    switchSection('song-lyrics-section');
    let id = song_id.split('_')[0];
    let song_group = song_id.split('_')[1];

    let song = songs[song_group][id];
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
    let action_btn = `<div class="fab-button animate bottom-right dropdown">
        <div id="${song_id}_parent2" class="fab playing" onclick="actionButtonsHandler(event)">
            <ion-icon id="${song_id}_play2_${song_group}" class="" name="play"></ion-icon>
        </div>
    </div>`;

    song_ele.innerHTML = "";
    song_ele.insertAdjacentHTML("beforeend", title_header);
    song_ele.insertAdjacentHTML("beforeend", action_btn);

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

// switchSection('downloads-section');



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
    let song_group = id[2];

    if (id[1] === 'play') {
        removePlayingClass();
        // addClass(`${id[0]}_${id[1]}_${song_group}`, 'playing');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'name', 'stop');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'id', `${id[0]}_stop`);
        playSong(id);
    } else if (id[1] === 'play2') {
        removePlayingClass();
        // addClass(`${id[0]}_${id[1]}_${song_group}`, 'playing');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'name', 'stop');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'id', `${id[0]}_stop2`);
        playSong(id);
    } else if (id[1] === 'stop' || id[1] === 'stop2') {
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

const removePlayingClass = (song_group) => {
    document.querySelectorAll('.playing').forEach(ele => {
        let id = ele.id.split('_');
        document.getElementById(`${id[0]}_${id[1]}`).classList.remove('playing');

        setAttributeValue(`#${id[0]}_${id[1]}`, 'name', 'play');

        if (id[1] === 'stop') {
            setAttributeValue(`#${id[0]}_${id[1]}`, 'id', `${id[0]}_play_${song_group}`);
        } else if (id[1] === 'stop2') {
            setAttributeValue(`#${id[0]}_${id[1]}`, 'id', `${id[0]}_play2_${song_group}`);
        }

        stopSong();
    })
}

const removeFavoriteClass = (id, name) => document.getElementById(id).classList.remove(name);

const playSong = (id) => {
    let song_player = document.querySelector(".song-player");
    let song_id = id[0];
    let btn_action = id[1];
    let song_group = id[2];

    if (song_player.duration > 0 && !song_player.paused) {
        song_player.pause();
        song_player.currentTime = 0;
    }

    song_player.src = songs[song_group][song_id].song_url;

    song_player.play()
        .then(res => {
            if (id[1] === 'play') {
                addClass(`${id[0]}_${btn_action}_${song_group}`, 'playing');
                setAttributeValue(`#${song_id}_${btn_action}_${song_group}`, 'name', 'stop');
                setAttributeValue(`#${song_id}_${btn_action}_${song_group}`, 'id', `${song_id}_stop`);
            } else if (id[1] === 'play2') {
                addClass(`${song_id}_${btn_action}_${song_group}`, 'playing');
                setAttributeValue(`#${song_id}_${btn_action}_${song_group}`, 'name', 'stop');
                setAttributeValue(`#${song_id}_${btn_action}_${song_group}`, 'id', `${song_id}_stop2`);
            }
        })
        .catch(err => {
            console.log("Not Playing::::", err);
            let spl = song_player.src.split('/');
            let spl_len = spl.length;
            let spl2 = spl[spl_len - 1].split('-');

            Swal.fire({
                title: 'Download Song',
                text: "This song is not available on your device. Do you want to download it?",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, download it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Starting Download!',
                        'Your file will be downloaded.',
                        'success'
                    )

                    // downloadSong(song_links[spl2[0]])
                }
            })
        })

    document.querySelector(".song-player").onended = function(res) {
        removePlayingClass(song_group);
    }
}

const stopSong = () => {
    let song_player = document.querySelector(".song-player");

    song_player.pause();
    song_player.currentTime = 0;
}

const stopSongOnSectionSwitch = () => {
    console.log("Section")
    let song_player = document.querySelector(".song-player");

    if (song_player.duration > 0 && !song_player.paused) {
        song_player.pause();
        song_player.currentTime = 0;
    }
}

loadSongs('worship');