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

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "edge");
});


// Or with jQuery

// $(document).ready(function(){
// $('.sidenav').sidenav();

// document.querySelectorAll('.division').forEach(ele => {
//     ele.addEventListener("click", e => {
//         // instance.close();
//         $('.sidenav').close();
//     })
// })

// document.querySelector('#close').addEventListener("click", e => {
//     var elem = document.querySelectorAll('.sidenav');
//     var instance = M.Sidenav.getInstance(elem);
//     // var instances = M.Sidenav.init(elems, "edge");
//     instance.close();
// })

// });

document.querySelector("#hamburger").addEventListener("click", e => {
    showMenu();
})

let menu_items = document.querySelectorAll(".menu-item");
menu_items.forEach(ele => {
    ele.addEventListener("click", e => {
        document.querySelector(".sidenav").style = "transform: translateX(0%);";
        displayContent(e.target.id);
    })
})

const displayContent = (ele_class) => {
    document.querySelector(`.show`).classList.remove('show');
    document.querySelector(`.${ele_class}`).classList.add("show");
    if (document.querySelector(".sidenav-overlay")) {
        hideMenu();
    }
}

const showMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(0%);";
    document.querySelector(".sidenav-overlay").style = "display: block; opacity: 1;";
}

const hideMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(-105%);";
    document.querySelector(".sidenav-overlay").style = "display: none; opacity: 0;";
}

let previous_parent_class = "";
document.querySelectorAll(".play").forEach(ele => {
    ele.addEventListener("click", e => {
        let playing = document.querySelector(".is-playing");
        let parent_class = e.target.parentElement.className;

        if (playing) {
            playing.pause();
            playing.currentTime = 0;
            playing.classList.remove("is-playing");
            showIcon(`.${previous_parent_class} .play`);
            hideIcon(`.${previous_parent_class} .stop`);
        }

        previous_parent_class = parent_class;

        document.querySelector(`#${parent_class}-song`).classList.add("is-playing");
        document.querySelector(`#${parent_class}-song`).play();
        showIcon(`.${parent_class} .stop`);
        hideIcon(`.${parent_class} .play`);

        document.querySelector(".is-playing").onended = function() {
            showIcon(`.${parent_class} .play`);
            hideIcon(`.${parent_class} .stop`);
        }
    })
})

document.querySelectorAll(".stop").forEach(ele => {
    ele.addEventListener("click", e => {
        let playing = document.querySelector(".is-playing");
        let parent_class = e.target.parentElement.className;

        playing.pause();
        playing.currentTime = 0;
        playing.classList.remove("is-playing");
        showIcon(`.${parent_class} .play`);
        hideIcon(`.${parent_class} .stop`);
    })
})

const showIcon = (show) => {
    document.querySelector(show).style = "display: block";
}

const hideIcon = (hide) => {
    document.querySelector(hide).style = "display: none";
}