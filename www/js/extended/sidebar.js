let menu_items = document.querySelectorAll(".menu-item");
menu_items.forEach(ele => {
    ele.addEventListener("click", e => {
        previous_section = current_section;
        document.querySelector(".sidenav").style = "transform: translateX(0%);";
        current_section = e.target.id;
        switchSection(e.target.id);
    })
})

document.querySelector("#hamburger").addEventListener("click", e => {
    showMenu();
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
    console.log(document.querySelector(".sidenav-overlay"))
    // document.querySelector(".sidenav-overlay").style = "display: block; opacity: 1;";
    // document.querySelector("body").setAttribute("style", "overflow: hidden");
}

const hideMenu = () => {
    document.querySelector(".sidenav").style = "transform: translateX(-105%);";
    document.querySelector(".sidenav-overlay").style = "display: none; opacity: 0;";
    document.querySelector("body").removeAttribute("style");
}