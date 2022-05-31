document.getElementById('download-songs-btn').addEventListener('click', (e) => {
    // downloadSong(song_links[2]);
    // console.log(song_links);
    for (key in song_links) {
        downloadSong(song_links[key]);
    }
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
    alert("Download Success");
    // alert(JSON.stringify(data));
    listDir(cordova.file.applicationDirectory + "www/audio/");
});

document.addEventListener('DOWNLOADER_downloadError', function(event) {
    var data = event.data;
    alert("Download Error");
    // alert(JSON.stringify(data));
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
                    alert('File list success');
                    // alert(path + ' === ' + entries.length);
                    let html2 = `<h6>${path}</h6>
                    <code>${JSON.stringify(entries)}</code>`
                    document.getElementById('obj').insertAdjacentHTML('beforeend', html2);

                    if (entries.length > 0) {
                        // alert("Yes entries > 0");
                        // alert(JSON.stringify(entries));
                        entries.forEach(ele => {
                            // alert('src=' + ele.fullPath);
                            if (ele.fullPath !== '/audio/.nomedia') {
                                let html = '';

                                if (ele.name === 'ToGodBeTheGlory.mp3') {
                                    html = `<h6>${ele.name}</h6>
                                    <audio class="song-playe" src="${ele.nativeURL}" controls></audio>
                                    <p>${ele.nativeURL}</p>`
                                } else {
                                    html = `<h6>${ele.name}</h6>
                                    <audio class="song-playe" src="audio/${ele.name}" controls></audio>`;
                                }

                                document.getElementById('songs-list').insertAdjacentHTML('beforeend', html);
                            }
                        })
                    }
                },
                function(err) {
                    alert('File list error 1');
                    alert(JSON.stringify(err));
                }
            );
        },
        function(err) {
            alert('File list error 2');
            alert(JSON.stringify(err));
        }
    );
}

const downloadSong = (url) => {
    console.log("URL:::", url);
    downloader.init({ folder: "audio" });
    downloader.get(url);
}