const switchSection = (id) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })

    document.querySelectorAll('.show-ele').forEach(ele => ele.classList.replace('show-ele', 'hide-ele'));
    document.getElementById(id).classList.add('show-ele');

    document.querySelectorAll('.appBottomMenu .active').forEach(ele => ele.classList.remove('active'));

    if (id === 'songs-section') {
        document.querySelector(`.${id}`).classList.add('active');
    } else if (id === 'song-history-section') {
        document.querySelector(`.${id}`).classList.add('active');
    } else if (id === 'settings-section') {
        document.querySelector(`.${id}`).classList.add('active');
    } else if (id === 'favorites-section') {
        document.querySelector(`.${id}`).classList.add('active');
        loadFavoriteSongs();
    }

    stopSongOnSectionSwitch();

    let title = id.replace(/-/g, ' ').replace('section', '').trim();
    document.querySelector('.pageTitle').innerHTML = title;

    if (id === 'song-lyrics-section') {
        document.querySelector('.header-title').innerHTML = '';
    } else {
        document.querySelector('.header-title').innerHTML = title;
    }
}





// let songs_keys = Object.keys(songs);
// let favorites = [];
// let previous_section = "";
// let current_section = "songs";



// const addEventToSongTitle = () => {
//     document.querySelectorAll(".song-title").forEach(ele => {
//         ele.addEventListener("click", e => {
//             let id = e.target.id;
//             let song_lyrics_keys = Object.keys(songs[id]);
//             let stanzas = songs[id].stanzas;
//             let song_ele = document.querySelector(".song");
//             let stanzas_keys = Object.keys(stanzas);
//             let title_header = `<div>
//                 <h5>${songs[id].title}</h5>
//                 <article class="important-info">
//                     <span>By: ${songs[id].author}</span>
//                     <a href="#">Read History</a>
//                 </article>
//             </div>`;
//             let play_btn = `<a class="${id} btn-floating btn-large waves-effect waves-light">
//                 <i class="material-icons play action-icons">play_arrow</i>
//                 <i class="material-icons stop action-icons">stop</i>
//             </a>`;

//             previous_section = current_section;

//             song_ele.innerHTML = "";
//             song_ele.insertAdjacentHTML("beforeend", title_header);
//             song_ele.insertAdjacentHTML("beforeend", play_btn);

//             if (song_lyrics_keys.includes('chorus')) {
//                 let stanza1 = `<div class=stanza>
//                     <span>1.</span>
//                     <article>
//                         ${stanzas[1]}
//                     </article>
//                 </div>`;

//                 let chorus = `<div class=stanza>
//                     <span>Chorus</span>
//                     <article>
//                         ${songs[id].chorus}
//                     </article>
//                 </div>`;

//                 song_ele.insertAdjacentHTML("beforeend", stanza1);
//                 if (songs[id].chorus.length > 0) {
//                     song_ele.insertAdjacentHTML("beforeend", chorus);
//                 }

//                 for (let i = 1; i < stanzas_keys.length; i++) {
//                     let html = `<div class=stanza>
//                         <span>${i + 1}.</span>
//                         <article>
//                             ${stanzas[i + 1]}
//                         </article>
//                     </div>`;
//                     song_ele.insertAdjacentHTML("beforeend", html);
//                 }
//             } else {
//                 stanzas_keys.forEach((ele, index) => {
//                     let html = `<div class=stanza>
//                     <span>${index + 1}</span>
//                     <article>
//                         ${stanzas[ele]}
//                     </article>
//                 </div>`;
//                     song_ele.insertAdjacentHTML("beforeend", html);
//                 })
//             }

//             document.querySelector(`.show`).classList.remove('show');
//             document.querySelector(`.song`).classList.add("show");
//             addEventToPlayIcon('song');
//             addEventToStopIcon("song");
//             stopSongOnSectionSwitch();
//         })
//     })
// }

// const showIcon = (show) => {
//     document.querySelector(show).style = "display: block";
// }

// const hideIcon = (hide) => {
//     document.querySelector(hide).style = "display: none";
// }

const loadFavoriteSongs = () => {
    let parent_ele = document.getElementById('favorites-section');
    let count = 1;
    parent_ele.innerHTML = "";

    if (favorite_songs.length > 0) {
        favorite_songs.forEach(ele => {
            let id = ele.split('_');
            let song_id = id[0];
            let song_group = id[2];
            let single_song = songs[song_group][song_id];
            let song_title = single_song.title;
            let author = single_song.author;

            let html = `<article class="song">
            <div class="title-sec" onclick="openFullSong('${song}_${song_group}')">
                <span class="song-num">${count}.</span>
                <div>
                    <div class="song-title">${song_title}</div>
                    <div class="author">By: ${author}</div>
                </div>
            </div>
            <div id="${song}_parent3" class="action-sec" onclick="actionButtonsHandler(event)">
                <ion-icon id="${song}_play3_${song_group}" class="play-icon action-icons" name="play"></ion-icon>
                <ion-icon onclick="unlikeSong('${song_id}_like_${song_group}')" class="unlike-icon action-icons" name="close-circle-outline"></ion-icon>
            </div>
        </article>`;

            parent_ele.insertAdjacentHTML('beforeend', html);
            count += 1;
        })
    } else {
        let html = `<p style="margin-top: 50%; text-align: center;">No Favorite</p>`;
        parent_ele.insertAdjacentHTML('beforeend', html);
    }
}

const unlikeSong = (song_id) => {
    favorite_songs.splice(favorite_songs.indexOf(song_id), 1);
    localStorage.setItem('favorite-songs', JSON.stringify(favorite_songs));
    loadFavoriteSongs();
    songStatistics();
}

const goBack = () => {
    if (previous_section) {
        switchSection(previous_section);
        previous_section = "";
    } else {
        navigator.app.exitApp();
    }

}

// document.querySelector("#back").addEventListener("click", goBack, false);
document.addEventListener("backbutton", goBack, false);