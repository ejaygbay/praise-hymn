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
        loadSongs();
    } else if (id === 'song-history-section') {
        document.querySelector(`.${id}`).classList.add('active');
    } else if (id === 'settings-section') {
        document.querySelector(`.${id}`).classList.add('active');
    } else if (id === 'favorites-section') {
        document.querySelector(`.${id}`).classList.add('active');
        loadFavoriteSongs();
    } else if (id === 'all-songs-section') {
        document.querySelector(`.${id}`).classList.add('active');
        document.getElementById('loader').setAttribute("style", "display: ''; background: transparent;");
        loadAllSongs();
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

const loadFavoriteSongs = () => {
    let parent_ele = document.getElementById('favorites-section');
    let count = 1;
    parent_ele.innerHTML = "";
    console.log("favorite_songs", favorite_songs);


    if (favorite_songs.length > 0) {
        favorite_songs.forEach(ele => {
            let id = ele.split('_');
            let song_id = id[0];
            let song_group = id[2];
            let single_song = songs[song_group.replaceAll('-', '_')][song_id];
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

const loadAllSongs = () => {
    let all_songs_parent_ele = document.getElementById('all-songs');
    let all_songs_obj = {};
    let all_songs_key = [];


    all_songs_parent_ele.innerHTML = "";
    setTimeout(() => {
        for (let key in songs) {
            all_songs_key.push(...Object.keys(songs[key]));
            all_songs_key = all_songs_key.sort();
            let category_obj = songs[key];

            for (let song in category_obj) {
                let new_obj = category_obj[song];
                new_obj.category = key;
                all_songs_obj[song] = new_obj;
            }
        }

        all_songs_key.forEach((key, count) => {
            let modified_category = all_songs_obj[key].category.replaceAll('_', '-');
            let fav_song_in_arr = `${key}_like_${modified_category}`;
            let fav_icon_name = 'heart-outline';
            let fav_icon_id = `${key}_unlike_${modified_category}`;

            if (favorite_songs.includes(fav_song_in_arr)) {
                fav_icon_name = 'heart';
                fav_icon_id = `${key}_like_${modified_category}`;
                console.log("Yes", fav_song_in_arr);
            }



            let html = `<article class="song_search song" id="${all_songs_obj[key].title}-search">
            <div class="title-sec" onclick="openFullSong('${key}_${modified_category}')">
                <span class="song-num">${count + 1}.</span>
                <div>
                    <div class="song-title">${all_songs_obj[key].title}</div>
                    <div class="author">By: ${all_songs_obj[key].author} <span class="author">| Hymn #: ${all_songs_obj[key].song_num}</span></div>
                </div>
            </div>
            <div id="${key}_parent" class="action-sec" onclick="actionButtonsHandler(event)">
                <ion-icon id="${key}_play_worship" class="play-icon action-icons md hydrated" name="play" role="img" aria-label="play"></ion-icon>
                <ion-icon id=${fav_icon_id} class="unlike-icon action-icons" name=${fav_icon_name}></ion-icon>
            </div>
        </article>`;

            // <ion-icon id="${key}_unlike_worship" class="unlike-icon action-icons md hydrated" name="heart-outline" role="img" aria-label="heart outline"></ion-icon>

            all_songs_parent_ele.insertAdjacentHTML('beforeend', html);
        })

        document.getElementById('loader').setAttribute("style", "display: none; background: #fff;");
    }, 100);
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

let search_icon_ele = document.getElementById("song-search-element");
let song_list = "";

document.getElementById("song-search-icon").addEventListener('click', (e) => {
    song_list = document.querySelectorAll('.song_search');
    // console.log(song_list);
})

document.getElementById("song-search-input-element").addEventListener('input', (e) => {
    let value = e.target.value;
    let filter = value.toLowerCase();

    song_list.forEach(song => {
        let song_id = song.id;
        let song_ele = document.getElementById(song_id);

        if (song_id.toLowerCase().includes(filter)) {
            console.log(song_id, filter);
            song_ele.classList.remove('d-none');
        } else {
            song_ele.classList.add('d-none');
        }
    })
})