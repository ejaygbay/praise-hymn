/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
let songs = {
    glory: {
        title: "To God Be The Glory",
        stanzas: {
            1: `To God be the glory, great things He hath done,
            So loved He the world that He gave us His Son,
            Who yielded His life our redemption to win,
            And opened the life-gate that all may go in.`,
            2: `Oh, perfect redemption, the purchase of blood,
            To every believer the promise of God;
            The vilest offender who truly believes,
            That moment from Jesus a pardon receives.`,
            3: `Great things He hath taught us, great things He hath done,
            And great our rejoicing through Jesus the Son;
            But purer, and higher, and greater will be
            Our wonder, our transport when Jesus we see.`
        },
        chorus: `Praise the Lord, praise the Lord, Let the earth hear His voice;
        Praise the Lord, praise the Lord, Let the people rejoice; Oh, come to the Father,
        through Jesus the Son, And give Him the glory; great things He hath done.`,
        author: "Alex Peter",
        like: false,
        song_url: "./music/ToGodBetheGlory.mp3",
        song_key: "Bb"
    },
    heaven: {
        title: "When We All Get To Heaven",
        stanzas: {
            1: `Sing the wondrous love of Jesus
            Sing His mercy and His grace;
            In the mansion bright and blessed
            He’ll prepare for us a place.`,
            2: `While we walk the pilgrim pathway
            Clouds will overspread the ski;
            But when trav’ling days are over
            Not a shadow, not a sigh.`,
            3: `Let us then be true and faithful
            Trusting, serving every day;
            Just one glimpse of Him in glory
            Will the toils of life repay.`,
            4: `Onward to the prize before us!
            Soon his beauty we’ll behold
            Soon the pearly gates will open
            We shall tread the streets of gold`
        },
        chorus: `When we all get to heaven,
        What a day of rejoicing that will be!
        When we all see Jesus,
        We’ll sing and shout the victory!`,
        author: "Benson Kollie",
        like: false,
        song_url: "./music/WhenWeAllGettoHeaven.mp3",
        song_key: "F"
    },
    faith: {
        title: "Faith Of Our Father",
        stanzas: {
            1: `Faith of our fathers, living still
            In spite of dungeon, fire and sword,
            O how our hearts beat high with joy
            Whene’er we hear that glorious word!
            Faith of our fathers! holy faith!
            We will be true to thee till death!`,
            2: `Our fathers, chained in prisons dark,
            Were still in heart and conscience free;
            And blest would be their children’s fate,
            If they, like them should die for thee:
            Faith of our fathers! holy faith!
            We will be true to thee till death!`,
            3: `Faith of our fathers, we will strive
            To win all nations unto thee;
            And through the truth that comes from God
            Mankind shall then indeed be free.
            Faith of our fathers! holy faith!
            We will be true to thee till death!`,
            4: `Faith of our fathers, we will love
            Both friend and foe in all our strife,
            And preach thee, too, as love knows how
            By kindly words and virtuous life.
            Faith of our fathers! holy faith!
            We will be true to thee till death!`
        },
        author: "Ruth Samuel",
        like: false,
        song_url: "./music/FaithofOurFathers.mp3",
        song_key: "G"
    }
}
let songs_keys = Object.keys(songs);
let favorites = [];
let previous_section = "";
let current_section = "songs";

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
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
                <p class="song-title" id=${ele}>${songs[ele].title}</p> <span class="author">By: ${songs[ele].author}</span> </td>
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



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "edge");
});


document.querySelector("#hamburger").addEventListener("click", e => {
    showMenu();
})

let menu_items = document.querySelectorAll(".menu-item");
menu_items.forEach(ele => {
    ele.addEventListener("click", e => {
        previous_section = current_section;
        document.querySelector(".sidenav").style = "transform: translateX(0%);";
        current_section = e.target.id;
        switchSection(e.target.id);
    })
})

const switchSection = (section_selector) => {
    document.querySelector("#fav-num").innerHTML = favorites.length;
    document.querySelector("#section-name").innerHTML = section_selector;
    document.querySelector(`.show`).classList.remove('show');
    document.querySelector(`.${section_selector}`).classList.add("show");
    if (document.querySelector(".sidenav-overlay")) {
        hideMenu();
    }

    if (section_selector === "songs") {
        displaySongs(".songs tbody");
    } else if (section_selector === "favorites") {
        displayFavoriteSongs(".favorites tbody");
    }
    stopSongOnSectionSwitch();
    findFavoritSongs();
}

const showMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(0%);";
    document.querySelector(".sidenav-overlay").style = "display: block; opacity: 1;";
    document.querySelector("body").setAttribute("style", "overflow: hidden");
}

const hideMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(-105%);";
    document.querySelector(".sidenav-overlay").style = "display: none; opacity: 0;";
    document.querySelector("body").removeAttribute("style");
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
                    <span>Major Key: ${songs[id].song_key}</span>
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

            if (song_lyrics_keys.includes("chorus")) {
                let stanza1 = `<div class="stanza">
                    <span>1.</span>
                    <article>
                        ${stanzas[1]}
                    </article>
                </div>`;

                let chorus = `<div class="stanza">
                    <span>Chorus</span>
                    <article>
                        ${songs[id].chorus}
                    </article>
                </div>`;

                song_ele.insertAdjacentHTML("beforeend", stanza1);
                song_ele.insertAdjacentHTML("beforeend", chorus);

                for (let i = 1; i < stanzas_keys.length; i++) {
                    let html = `<div class="stanza">
                        <span>${i + 1}.</span>
                        <article>
                            ${stanzas[i + 1]}
                        </article>
                    </div>`;
                    song_ele.insertAdjacentHTML("beforeend", html);
                }
            } else {
                stanzas_keys.forEach((ele, index) => {
                    let html = `<div class="stanza">
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
    song_player.play();
    showIcon(`.${section} .${parent_class} .stop`);
    hideIcon(`.${section} .${parent_class} .play`);

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

const findFavoritSongs = () => {
    favorites = [];
    songs_keys.forEach(ele => {
        if (songs[ele].like) {
            favorites.push(ele);
        }
    })
    document.querySelector("#fav-num").innerHTML = favorites.length;
}

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
        let html = `<tr>
                <td>${index + 1}.</td>
                <td class="song-title" id=${ele}>${songs[ele].title}</td>
                <td class=${ele}>
                    <span class="material-icons play action-icons">play_arrow</span>
                    <span class="material-icons stop action-icons">stop</span>
                </td>
                <td class=${ele}-favorite>
                    ${like_and_unlike}
                </td>
            </tr>`;

        let html2 = `<tr>
            <td>${index + 1}.</td>
            <td>
                <p class="song-title" id=${ele}>${songs[ele].title}</p> <span class="author">By: ${songs[ele].author}</span> </td>
            <td class=${ele}>
                <span class="material-icons play action-icons">play_arrow</span>
                <span class="material-icons stop action-icons">stop</span>
            </td>
            <td class=${ele}-favorite>
                ${like_and_unlike}
            </td>
        </tr>`;
        document.querySelector(section_selector).insertAdjacentHTML("beforeend", html2);
    })
    addEventToSongTitle();
    addEventToPlayIcon('songs');
    addEventToStopIcon('songs');
    addEventToLikeIcon('songs');
    addEventToUnlikeIcon('songs');

}
displaySongs(".songs tbody");

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

/**
SIZE    PORTAIL     LANDSCAPE
ldpi	200x320	    320x200
mdpi	320x480	    480x320
hdpi	480x800	    800x480
xhdpi	720x1280	1280x720
xxhdpi	960x1600	1600x960
xxxhdpi	1280x1920	1920x1280
 */

// Portail
// 200 320
// 320 480
// 480 800
// 720 1280
// 960 1600
// 1280 1920

// Landscape
// 320 200
// 480 320
// 800 480
// 1280 720
// 1600 960
// 1920 1280