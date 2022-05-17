let songs_keys = Object.keys(songs);
let favorites = [];
let previous_section = "";
let current_section = "songs";

const openFullSong = (e) => {
    console.log(e);
}

const addEventToSongTitle = () => {
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
            playSong(e, section);
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

let previous_parent_class = "";
const playSong = (e, section) => {
    let song_player = document.querySelector(".song-player");
    let parent_class = e.target.parentElement.classList[0];

    if (song_player.duration > 0 && !song_player.paused) {
        song_player.pause();
        song_player.currentTime = 0;
        showIcon(`.${section} .${previous_parent_class} .play`);
        hideIcon(`.${section} .${previous_parent_class} .stop`);
    }

    previous_parent_class = parent_class;
    song_player.src = songs[parent_class].song_url;

    song_player.play()
        .then(res => {
            showIcon(`.${section} .${parent_class} .stop`);
            hideIcon(`.${section} .${parent_class} .play`);
        })
        .catch(err => {
            let spl = song_player.src.split('/');
            let spl_len = spl.length;
            let spl2 = spl[spl_len - 1].split('-');
            console.log(spl2)
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
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        })

    document.querySelector(".song-player").onended = function() {
        showIcon(`.${section} .${parent_class} .play`);
        hideIcon(`.${section} .${parent_class} .stop`);
    }
}

const stopSong = (e, section) => {
    let song_player = document.querySelector(".song-player");
    let parent_class = e.target.parentElement.className;
    if (section === 'song') {
        parent_class = parent_class = e.target.parentElement.classList[0];
    }

    song_player.pause();
    song_player.currentTime = 0;
    showIcon(`.${section} .${parent_class} .play`);
    hideIcon(`.${section} .${parent_class} .stop`);
}

const stopSongOnSectionSwitch = () => {
    let song_player = document.querySelector(".song-player");

    if (song_player.duration > 0 && !song_player.paused) {
        song_player.pause();
        song_player.currentTime = 0;
    }
}

const showIcon = (show) => {
    document.querySelector(show).style = "display: block";
}

const hideIcon = (hide) => {
    document.querySelector(hide).style = "display: none";
}

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

const findFavoritSongs = () => {
    favorites = [];
    songs_keys.forEach(ele => {
        if (songs[ele].like) {
            favorites.push(ele);
        }
    })
    document.querySelector("#fav-num").innerHTML = favorites.length;
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