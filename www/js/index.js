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
        like: false
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
        like: true
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
        like: false
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
        document.querySelector(section_selector).insertAdjacentHTML("beforeend", html);
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
        displayContent(e.target.id);
    })
})

const displayContent = (section_selector) => {
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
    findFavoritSongs();
}

const showMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(0%);";
    document.querySelector(".sidenav-overlay").style = "display: block; opacity: 1;";
}

const hideMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(-105%);";
    document.querySelector(".sidenav-overlay").style = "display: none; opacity: 0;";
}

const addEventToSongTitle = () => {
    document.querySelectorAll(".song-title").forEach(ele => {
        ele.addEventListener("click", e => {
            let id = e.target.id;
            let song_lyrics_keys = Object.keys(songs[id]);
            let stanzas = songs[id].stanzas;
            let song_ele = document.querySelector(".song");
            let stanzas_keys = Object.keys(stanzas);
            let title = `<h5>${songs[id].title}</h5>`;
            previous_section = current_section;

            song_ele.innerHTML = "";
            song_ele.insertAdjacentHTML("beforeend", title);

            if (song_lyrics_keys.includes("chorus")) {
                let stanza1 = `<div class="stanza">
                    <span>1</span>
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
                        <span>${i + 1}</span>
                        <article>
                            ${stanzas[i]}
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
        })
    })
}

const addEventToPlayIcon = (section) => {
    let previous_parent_class = "";
    document.querySelectorAll(".play").forEach(ele => {
        ele.addEventListener("click", e => {
            let playing = document.querySelector(".is-playing");
            let parent_class = e.target.parentElement.className;

            if (playing) {
                playing.pause();
                playing.currentTime = 0;
                playing.classList.remove("is-playing");
                showIcon(`.${section} .${previous_parent_class} .play`);
                hideIcon(`.${section} .${previous_parent_class} .stop`);
            }

            previous_parent_class = parent_class;

            document.querySelector(`#${parent_class}-song`).classList.add("is-playing");
            document.querySelector(`#${parent_class}-song`).play();
            showIcon(`.${section} .${parent_class} .stop`);
            hideIcon(`.${section} .${parent_class} .play`);

            document.querySelector(".is-playing").onended = function() {
                showIcon(`.${section} .${parent_class} .play`);
                hideIcon(`.${section} .${parent_class} .stop`);
            }
        })
    })
}

const addEventToStopIcon = (section) => {
    document.querySelectorAll(".stop").forEach(ele => {
        ele.addEventListener("click", e => {
            let playing = document.querySelector(".is-playing");
            let parent_class = e.target.parentElement.className;

            playing.pause();
            playing.currentTime = 0;
            playing.classList.remove("is-playing");
            showIcon(`.${section} .${parent_class} .play`);
            hideIcon(`.${section} .${parent_class} .stop`);
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
        })
    })
    findFavoritSongs();
}

const addEventToLikeIcon = (section) => {
    document.querySelectorAll(".like").forEach(ele => {
        ele.addEventListener("click", e => {
            let parent_class = e.target.parentElement.className;
            songs[parent_class.split("-")[0].trim()].like = false;
            hideIcon(`.${section} .${parent_class} .like`);
            showIcon(`.${section} .${parent_class} .unlike`);

            if (section === "favorites") {
                hideIcon(`.${section} .${parent_class}-tr`);
            }
        })
    })
    findFavoritSongs();
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
}

const displaySongs = (section_selector) => {
    document.querySelector(section_selector).innerHTML = "";
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
        document.querySelector(section_selector).insertAdjacentHTML("beforeend", html);
    })
    addEventToSongTitle();
    addEventToPlayIcon('songs');
    addEventToStopIcon('songs');
    addEventToLikeIcon('songs');
    addEventToUnlikeIcon('songs');

}
displaySongs(".songs tbody");

const goBack = () => {
    displayContent(previous_section);
}

document.addEventListener("backbutton", goBack, false);