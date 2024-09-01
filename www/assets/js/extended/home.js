let favorite_songs = [];

if (localStorage.getItem('favorite-songs')) {
    favorite_songs = JSON.parse(localStorage.getItem('favorite-songs'));
} else {
    localStorage.setItem('favorite-songs', JSON.stringify(favorite_songs))
}

const loadSongs = (song_group) => {
    let parent_ele = document.getElementById(song_group);
    window.scroll({
        top: 0,
        behavior: "smooth"
    })

    if (songs[song_group.replaceAll('-', '_')]) {
        parent_ele.innerHTML = "";
        let all_songs = songs[song_group.replaceAll('-', '_')];

        for (song in all_songs) {
            let song_title = all_songs[song].title;
            let author = all_songs[song].author;
            let fav_song_in_arr = `${song}_like_${song_group}`;
            let fav_icon_name = 'heart-outline';
            let fav_icon_id = `${song}_unlike_${song_group}`;
            let song_num = all_songs[song].song_num;

            if (favorite_songs.includes(fav_song_in_arr)) {
                fav_icon_name = 'heart';
                fav_icon_id = `${song}_like_${song_group}`;
            }

            let html = `<article class="song">
                <div class="title-sec" onclick="openFullSong('${song}_${song_group}')">
                    <span class="song-num">${song_num}.</span>
                    <div>
                        <div class="song-title">${song_title}</div>
                        <div class="author">By: ${author}</div>
                    </div>
                </div>
                <div id="${song}_parent" class="action-sec" onclick="actionButtonsHandler(event)">
                    <ion-icon id="${song}_play_${song_group}" class="play-icon action-icons" name="play"></ion-icon>
                    <ion-icon id=${fav_icon_id} class="unlike-icon action-icons" name=${fav_icon_name}></ion-icon>
                </div>
            </article>`;

            parent_ele.insertAdjacentHTML('beforeend', html);
        }
    } else {
        console.log("sorry")
    }

    stopSongOnSectionSwitch();
    makeSongTabActive(`[href="#${song_group}"] .card`);
}

const makeSongTabActive = (ele) => {
    document.querySelectorAll('.active-song-tab').forEach(el => {
        el.classList.remove('active-song-tab');
    })

    document.querySelector(ele).classList.add('active-song-tab')
}

const openFullSong = (song_id) => {
    switchSection('song-lyrics-section');
    let id = song_id.split('_')[0];
    let song_group = song_id.split('_')[1];

    let song = songs[song_group.replaceAll('-', '_')][id];
    let song_lyrics_keys = Object.keys(song);
    let stanzas = song.stanzas;
    let stanzas_keys = Object.keys(stanzas);
    let title_header = `<div>
        <h2 class="lyric-title">${song.title}</h2>
        <article class="important-info">
            <span>By: ${song.author} | Hymn #: ${song.song_num}</span>
            <a href="#${song_id}_history" onclick="switchSection('song-history-section')">Read History</a>
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

const actionButtonsHandler = (e) => {
    let id = e.target.id.split('_');
    let song_id = id[0];
    let btn_action = id[1];
    let song_group = id[2];

    if (btn_action === 'play') {
        removePlayingClass();
        // addClass(`${id[0]}_${id[1]}_${song_group}`, 'playing');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'name', 'stop');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'id', `${id[0]}_stop`);
        playSong(id);
    } else if (btn_action === 'play2') {
        removePlayingClass();
        // addClass(`${id[0]}_${id[1]}_${song_group}`, 'playing');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'name', 'stop');
        // setAttributeValue(`#${id[0]}_${id[1]}_${song_group}`, 'id', `${id[0]}_stop2`);
        playSong(id);
    } else if (btn_action === 'stop' || btn_action === 'stop2') {
        removePlayingClass();
    } else if (btn_action === 'like') {
        removeFavoriteClass(`${song_id}_parent`, 'favorite');
        setAttributeValue(`#${song_id}_like_${song_group}`, 'name', 'heart-outline');
        setAttributeValue(`#${song_id}_like_${song_group}`, 'id', `${song_id}_unlike_${song_group}`);

        let fav_song_id = `${song_id}_like_${song_group}`;
        if (favorite_songs.includes(fav_song_id)) {
            favorite_songs.splice(favorite_songs.indexOf(fav_song_id), 1);
            localStorage.setItem('favorite-songs', JSON.stringify(favorite_songs));
        }

        songStatistics();
    } else if (btn_action === 'unlike') {
        addClass(`${song_id}_parent`, 'favorite');
        setAttributeValue(`#${song_id}_unlike_${song_group}`, 'name', 'heart');
        setAttributeValue(`#${song_id}_unlike_${song_group}`, 'id', `${song_id}_like_${song_group}`);

        let fav_song_id = e.target.id;
        if (!favorite_songs.includes(fav_song_id)) {
            favorite_songs.push(fav_song_id);

            localStorage.setItem('favorite-songs', JSON.stringify(favorite_songs));
        }

        songStatistics();
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

    song_player.src = songs[song_group.replaceAll('-', '_')][song_id].song_url;

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
    let song_player = document.querySelector(".song-player");

    if (song_player.duration > 0 && !song_player.paused) {
        song_player.pause();
        song_player.currentTime = 0;
    }
}

const songStatistics = () => {
    let songs_key = Object.keys(songs);
    let count = 0;

    songs_key.forEach(ele => {
        let song_keys = Object.keys(songs[ele]);
        count += song_keys.length;
    })

    document.getElementById('fav-num-tab').innerHTML = favorite_songs.length;
    document.getElementById('fav-num-sidebar').innerHTML = favorite_songs.length;
    document.getElementById('song-num').innerHTML = count;
}

songStatistics();

loadSongs('worship');