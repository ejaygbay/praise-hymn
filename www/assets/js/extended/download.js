document.getElementById('download-songs-btn').addEventListener('click', (e) => {
    downloadSong();
    // console.log(song_links);
    // for (key in song_links) {
    //     downloadSong(song_links[key]);
    //     // console.log(song_links[key])
    // }
    // , null, 'ToGodBeTheGlory.mp3'
    // https://www.orimi.com/pdf-test.pdf

    // alert("path 2");
    // alert(cordova.file.applicationDirectory);

    //example: list of www/audio/ folder in cordova/ionic app.
    // listDir(cordova.file.applicationDirectory + "www/audio/");
})

document.addEventListener('DOWNLOADER_noWifiConnection', function(event) {
    // var data = event.data;
    alert("No wifi connection");
})

document.addEventListener('DOWNLOADER_downloadSuccess', function(event) {
    var data = event.data;
    console.log("Download Success", data);
    listDir(cordova.file.applicationDirectory + "www/audio/");
});

document.addEventListener('DOWNLOADER_downloadError', function(event) {
    var data = event.data;
    console.log("Download Error", data);
});

document.addEventListener('DOWNLOADER_gotFolder', function(event) {
    var data = event.data;
    // alert("Check Folder");

    // alert('1' + data[0].nativeURL);
    listDir(data[0].nativeURL); // file:///data/user/0/cbc.praisehymn/files/files/audio/
});

function listDir(path) {
    window.resolveLocalFileSystemURL(path,
        function(fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(
                function(entries) {
                    console.log('File list success', entries.length);

                    let html2 = `<h6>${path}</h6>
                    <code>${entries}</code>`
                    document.getElementById('obj').insertAdjacentHTML('beforeend', html2);

                    if (entries.length > 0) {
                        console.log("Yes entries > 0", entries);

                        entries.forEach(ele => {
                            console.log("Path:::::>>>>", `src=${ele.fullPath}`);
                            if (ele.fullPath !== '/audio/.nomedia') {
                                let html = '';

                                // if (ele.name === 'ToGodBeTheGlory.mp3') {
                                html = `<h6>${ele.name}</h6>
                                    <audio class="song-playe" src="${ele.nativeURL}" controls></audio>
                                    <p>${ele.nativeURL}</p>`;

                                // } else {
                                //     html = `<h6>${ele.name}</h6>
                                //     <audio class="song-playe" src="audio/${ele.name}" controls></audio>`;
                                // }

                                document.getElementById('songs-list').insertAdjacentHTML('beforeend', html);
                            }
                        })
                    }
                },
                function(err) {
                    console.log('File list error 1', err);
                }
            );
        },
        function(err) {
            console.log('File list error 2', err);
        }
    );
}

const downloadSong = () => {

    let link_url = 'https://yeal.org/wp-content/uploads/2022/05/';
    downloader.getMultipleFiles([
        { url: `${link_url}002-SingPraiseToGod.mp3` },
        { url: `${link_url}003-PraiseToTheLordTheAlmighty.mp3` },
        { url: `${link_url}004-TheLordIsKing.mp3` },
        { url: `${link_url}005-PraiseTheLordSingHallelujah.mp3` },
        { url: `${link_url}007-WePraiseTheeOGodOurRedeemer.mp3` },
        { url: `${link_url}008-ToGodBeTheGlory` }
    ]);

    // downloader.getMultipleFiles([
    //     { url: "https://yeal.org/wp-content/uploads/2022/05/" },
    //     { url: "https://www.orimi.com/pdf-test.pdf" }
    // ]);

    // downloader.init({ folder: "audio" });
    // downloader.get(url1);
}