console.log("js dosyası aktif");
function playlistItemGenerator() {
  let playlist = document.getElementById("playlist-list");

  if(playlist) {
    let playLists = [
      {"tumbnail": "assets/images/playlist-tumbnails/legendary2.jpg","baslik": "NRGN Legendary", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/rock.jpg","baslik": "NRGN Rock", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/touch-the-sky.jpg","baslik": "Touch The Sky", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/red.jpg","baslik": "NRGN Red", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/dark2.jpg","baslik": "NRGN Dark", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Chill.jpg","baslik": "NRGN Chill", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Blues-Music.jpg","baslik": "NRGN Blues Music", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Blues-Music.jpg","baslik": "NRGN Blues Music", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Blues-Music.jpg","baslik": "NRGN Blues Music", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Blues-Music.jpg","baslik": "NRGN Blues Music", "icerik": "Playlist", "olusturan": "NRGN"},
      {"tumbnail": "assets/images/playlist-tumbnails/Blues-Music.jpg","baslik": "NRGN Blues Music", "icerik": "Playlist", "olusturan": "NRGN"},
    ];

    for(let playListContent of playLists) {
      let did = `
        <div class="playlist-list-item">
        <img src="${playListContent.tumbnail}">
        <div class="playlist-list-item-spans">
            <span class="playlist-list-item-spn1">${playListContent.baslik}</span>
            <div style="float: none; width: 100%;">
                <span class="playlist-list-item-spn2 makegray">${playListContent.icerik+' • '+playListContent.olusturan}</span>
            </div>
        </div>
        <svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 ilPTuf o_wMyH9_LbAmIwlVqsF0" viewBox="0 0 16 16" data-encore-id="icon"><path d=""></path></svg>
        </div>
      `;
      playlist.insertAdjacentHTML("beforeend", did);
      console.log("playlist listelendi");
    };
  }
  else{
    console.log("contact-clauses elementi bulunamadı");
  }
}

function playlistMainLastPlaylistGenerator() {
  let mainLastPlaylist = document.getElementById("main-stage-last-playlists-playlist");

  if(mainLastPlaylist) {
    let mainLastPlaylists = [
      {"tumbnail": "assets/images/playlist-tumbnails/begenilen.jpg","baslik": "Beğenilen Şarkılar"},
      {"tumbnail": "assets/images/playlist-tumbnails/legendary2.jpg","baslik": "NRGN Legendary"},
      {"tumbnail": "assets/images/playlist-tumbnails/rock.jpg","baslik": "NRGN Rock"},
      {"tumbnail": "assets/images/playlist-tumbnails/touch-the-sky.jpg","baslik": "Touch The Sky"},
      {"tumbnail": "assets/images/playlist-tumbnails/red.jpg","baslik": "NRGN Red"},
      {"tumbnail": "assets/images/playlist-tumbnails/dark2.jpg","baslik": "NRGN Dark"},
    ];
    let sayac=0;
    for(let playListContent of mainLastPlaylists) {
      sayac++;
      let did2 = `
        <div id="colorchanger${sayac}" class="main-stage-last-playlists-playlist-1"> 
        <img src="${playListContent.tumbnail}">
        <p>
            ${playListContent.baslik}
        </p>
        <button class="playbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
            </svg>
        </button>
        </div>
      `;
      mainLastPlaylist.insertAdjacentHTML("beforeend", did2);
      console.log("Son playlistler listelendi");
    };
  }
  else{
    console.log("main-stage-last-playlists-playlist elementi bulunamadı");
  }
}

function playlistMainSpecialPlaylistGenerator() {
  let mainSpecialPlaylist = document.getElementById("spclplylistgnrtr");

  if(mainSpecialPlaylist) {
    let mainSpecialPlaylists = [
      {"tumbnail": "assets/images/playlist-tumbnails/yeniMuzikRadari.jpg","baslik": "Yeni Müzik Radarı", "aciklama":"Takip ettiğin sanatçıların en son müziklerinin..."},
      {"tumbnail": "assets/images/playlist-tumbnails/dailyMix1.jpg","baslik": "Daily Mix 1", "aciklama":"Metallica, Soen, Megadeth ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/dailyMix2.jpg","baslik": "Daily Mix 2", "aciklama":"Kanye West, Y2K, Young Dolph ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/dailyMix3.jpg","baslik": "Daily Mix 3", "aciklama":"Cem Adrian, Yüzyüzeyken Konuşuruz, Hayko Cepki..."},
      {"tumbnail": "assets/images/playlist-tumbnails/dailyMix4.jpg","baslik": "Daily Mix 4", "aciklama":"SHADYXWBXRN, MONSS, Kodhell ve daha fazlası"},
    ];
    let sayac=0;
    let header1 =`
      <div class="main-stage-playlist-head">
      <h2 class="main-stage-playlist-header slk101020">
          NRGN İçin Derlendi
      </h2>
      <p class="main-stage-playlist-header2">
          Tümünü göster
      </p>
      </div>
    `;
    mainSpecialPlaylist.insertAdjacentHTML("beforeend", header1);
    for(let playListContent of mainSpecialPlaylists) {
      sayac++;
      let did3 = `
            <div class="spacial-playlist" id="playlist${sayac}">
                <div class="spacial-playlist-tumbnail">
                    <img src="${playListContent.tumbnail}">
                    <button class="playbutton btnmrgn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                </div>
                <div class="spacial-playlist-content">
                    <p class="spacial-playlist-content1">
                        ${playListContent.baslik}
                    </p>
                    <p class="spacial-playlist-content2">
                        ${playListContent.aciklama}
                    </p>
                </div>
              </div>
      `;
      mainSpecialPlaylist.insertAdjacentHTML("beforeend", did3);
      console.log("özel playlistler listelendi");
    };
  }
  else{
    console.log("main-stage-last-playlists-playlist elementi bulunamadı");
  }
}

function playlistMainSpecialPlaylistGenerator2() {
  let mainSpecialPlaylist = document.getElementById("spclplylistgnrtr2");

  if(mainSpecialPlaylist) {
    let mainSpecialPlaylists = [
      {"tumbnail": "assets/images/playlist-tumbnails/metalsp.jpeg","baslik": "Metal Mix", "aciklama":"Rammstein, Anathema, Blind Guardian ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/2000.jpeg","baslik": "2000'ler Mix", "aciklama":"Daft Punk, Metallica, Rammstein ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/wiz.jpeg","baslik": "Wiz Khalifa Mix", "aciklama":"JAY-Z, ScHoolboy Q, A$AP Rocky ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/sakin.jpeg","baslik": "Sakin Mix", "aciklama":"Low Roar, Grits, BOKKA ve daha fazlası"},
      {"tumbnail": "assets/images/playlist-tumbnails/rock.jpeg","baslik": "Rock Mix", "aciklama":"Pink Floyd, Guns N' Roses, Aerosmith ve daha fazlası"},
    ];
    let sayac=0;
    let header1 =`
      <div class="main-stage-playlist-head">
      <h2 class="main-stage-playlist-header slk101020">
          En çok dinlediğin mix'ler
      </h2>
      <p class="main-stage-playlist-header2">
          Tümünü göster
      </p>
      </div>
    `;
    mainSpecialPlaylist.insertAdjacentHTML("beforeend", header1);
    for(let playListContent of mainSpecialPlaylists) {
      sayac++;
      let did3 = `
            <div class="spacial-playlist" id="playlist${sayac}">
                <div class="spacial-playlist-tumbnail">
                    <img src="${playListContent.tumbnail}">
                    <button class="playbutton btnmrgn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#000000" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                </div>
                <div class="spacial-playlist-content">
                    <p class="spacial-playlist-content1">
                        ${playListContent.baslik}
                    </p>
                    <p class="spacial-playlist-content2">
                        ${playListContent.aciklama}
                    </p>
                </div>
              </div>
      `;
      mainSpecialPlaylist.insertAdjacentHTML("beforeend", did3);
      console.log("özel playlistler listelendi");
    };
  }
  else{
    console.log("main-stage-last-playlists-playlist elementi bulunamadı");
  }
}

function friendActivityGenerator() {
  let friendActivity = document.getElementById("friends-activity-main");

  if(friendActivity) {
    let friendActivitys = [
      {"profilePhoto": "assets/images/profile-photos/profilepp1.jpg","username": "Munur Sezer", "Music":"You're My Best Friend - Remastered  • Queen", "playlist" : "Gg", "date": "25 dk."},
      {"profilePhoto": "assets/images/profile-photos/profilepp2.jpg","username": "Liam Johnson", "Music":"Someone Like You • Adele", "playlist" : "My Chillout Escape", "date": "40 dk."},
      {"profilePhoto": "assets/images/profile-photos/profilepp3.jpg","username": "Emma Johnson", "Music":"Shape of You • Ed Sheeran", "playlist" : "Sunday Serenade", "date": "50 dk."},
      {"profilePhoto": "assets/images/profile-photos/profilepp4.jpg","username": "Noah Williams", "Music":"Uptown Funk • Mark Ronson ft. Bruno Mars", "playlist" : "Evening Acoustics", "date": "1 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp5.jpg","username": "Ethan Davis", "Music":"Billie Jean • Michael Jackson", "playlist" : "Sunset Grooves", "date": "1 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp6.jpg","username": "Olivia Davis", "Music":"Bohemian Rhapsody • Queen", "playlist" : "Urban Beats Anthems", "date": "1 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp7.jpg","username": "Ava Smith", "Music":"Happy • Pharrell Williams", "playlist" : "Midnight Jazz Jams", "date": "2 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp8.jpg","username": "Lucas Brown", "Music":"Rolling in the Deep • Adele", "playlist" : "Indie Vibes Delight", "date": "2 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp9.jpg","username": "James Miller", "Music":"Blinding Lights • The Weeknd", "playlist" : "Electronic Dreamscape", "date": "3 sa."},
      {"profilePhoto": "assets/images/profile-photos/profilepp10.jpg","username": "Evelyn Taylor", "Music":"Despacito • Luis Fonsi ft. Daddy Yankee", "playlist" : "Road Trip Anthems", "date": "4 sa."},
    ];
    for(let friendActivitysContent of friendActivitys) {
      let did4 = `
        <div class="friend-activity">
          <div class="friend-activity-button" style="background-image: url(${friendActivitysContent.profilePhoto});">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffff" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
              </svg>
          </div>
          <div class="friend-activity-titles">
              <p class="friend-activity-username">
                 ${friendActivitysContent.username}
              </p>
              <p class="friend-activity-activity-music">
                ${friendActivitysContent.Music}
              </p>
              <div class="friend-activity-activity-playlist">
                  <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="playlist" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 iYxpxA"><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>
                  <p class="friend-activity-activity-playlist-title">
                      ${friendActivitysContent.playlist}
                  </p>
              </div>
          </div>
          <div class="friend-activity-date">
              <p class="friend-activity-date-text">
                ${friendActivitysContent.date}
              </p>
          </div>
        </div>
      `;
      friendActivity.insertAdjacentHTML("beforeend", did4);
      console.log("özel playlistler listelendi");
    };
  }
  else{
    console.log("main-stage-last-playlists-playlist elementi bulunamadı");
  }
}


function tarihSaat() {
  const body = document.querySelector('body');
  var tarih = new  Date()
  // var saat = tarih.getHours();
  var saat = 18;
  console.log(saat);
  if(saat >=18 && saat < 24){
    body.style.setProperty('--color-text', '#333333');
    body.style.setProperty('--rowColors', '#121212');
    body.style.setProperty('--textColor1', '#b3b3b3');
    body.style.setProperty('--rangeBar', '#5a5a5a');
    body.style.setProperty('--textColor1Hover', 'white');
    body.style.setProperty('--textColor2', 'white');
    body.style.setProperty('--buttonColor', '#232323');
    body.style.setProperty('--buttonColorHover', '#2e2e2e');
    body.style.setProperty('--playlistBackground', 'hsla(0,0%,100%,.1)');
    body.style.setProperty('--playlistBackgroundHover', 'hsla(0, 0%, 100%, 0.192');
    body.style.setProperty('--mainStageBackground', 'linear-gradient(180deg, rgba(33,33,33,1) 0%, rgba(18,18,18,1) 100%');
    body.style.setProperty('--mainStageHeaderColor', 'rgba(255, 255, 255, 0);');
    body.style.setProperty('--buttonColors', "rgba(0,0,0,.7)");
    body.style.setProperty('--bodyBackground', "black");
    var dayAndNight = document.getElementById("dayAndNight");
    dayAndNight.innerHTML = "İyi Akşamlar";
  }
  else if (saat >=11 && saat <18){
    body.style.setProperty('--color-text', '#000000');
    body.style.setProperty('--rowColors', '#ffffff');
    body.style.setProperty('--textColor1', '#4d4d4d');
    body.style.setProperty('--rangeBar', '#5a5a5a');
    body.style.setProperty('--textColor1Hover', 'black');
    body.style.setProperty('--textColor2', '#595959');
    body.style.setProperty('--buttonColor', '#ebebeb');
    body.style.setProperty('--buttonColors', 'white');
    body.style.setProperty('--buttonColorHover', '#c1c1c1');
    body.style.setProperty('--playlistBackground', 'hsla(0, 0%, 0%, 0.1)');
    body.style.setProperty('--playlistBackground2', 'hsla(0, 0%, 0%, 0.03)');
    body.style.setProperty('--playlistBackgroundHover', 'hsla(0, 0%, 100%, 0.192');
    body.style.setProperty('--mainStageBackground', 'linear-gradient(180deg, rgba(230,230,230,1) 8%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--mainStageHeaderColor', '#e6e6e6');
    body.style.setProperty('--bodyBackground', "rgb(235, 235, 235)");
    body.style.setProperty('--colorchanger1', 'linear-gradient(180deg, rgb(255, 179, 249) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger2', 'linear-gradient(180deg, rgb(255, 235, 179) 0%, rgba(255,255,255,1) 29%');
    body.style.setProperty('--colorchanger3', 'linear-gradient(180deg, rgb(189, 189, 189) 0%, rgba(255,255,255,1) 29%');
    body.style.setProperty('--colorchanger4', 'linear-gradient(180deg, rgb(179, 218, 255) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger5', 'linear-gradient(180deg, rgb(253, 163, 163) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger6', 'linear-gradient(180deg, rgb(95, 95, 95) 0%, rgba(255,255,255,1) 29%)');
    var dayAndNight = document.getElementById("dayAndNight");
    dayAndNight.innerHTML = "Tünaydın";
  }
  else if(saat >=6 && saat < 11){
    body.style.setProperty('--color-text', '#000000');
    body.style.setProperty('--rowColors', '#ffffff');
    body.style.setProperty('--textColor1', '#4d4d4d');
    body.style.setProperty('--rangeBar', '#5a5a5a');
    body.style.setProperty('--textColor1Hover', 'black');
    body.style.setProperty('--textColor2', '#595959');
    body.style.setProperty('--buttonColor', '#ebebeb');
    body.style.setProperty('--buttonColors', 'white');
    body.style.setProperty('--buttonColorHover', '#c1c1c1');
    body.style.setProperty('--playlistBackground', 'hsla(0, 0%, 0%, 0.1)');
    body.style.setProperty('--playlistBackground2', 'hsla(0, 0%, 0%, 0.03)');
    body.style.setProperty('--playlistBackgroundHover', 'hsla(0, 0%, 100%, 0.192');
    body.style.setProperty('--mainStageBackground', 'linear-gradient(180deg, rgba(230,230,230,1) 8%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--mainStageHeaderColor', '#e6e6e6');
    body.style.setProperty('--buttonColors', "white");
    body.style.setProperty('--bodyBackground', "rgb(235, 235, 235)");
    body.style.setProperty('--colorchanger1', 'linear-gradient(180deg, rgb(255, 179, 249) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger2', 'linear-gradient(180deg, rgb(255, 235, 179) 0%, rgba(255,255,255,1) 29%');
    body.style.setProperty('--colorchanger3', 'linear-gradient(180deg, rgb(189, 189, 189) 0%, rgba(255,255,255,1) 29%');
    body.style.setProperty('--colorchanger4', 'linear-gradient(180deg, rgb(179, 218, 255) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger5', 'linear-gradient(180deg, rgb(253, 163, 163) 0%, rgba(255,255,255,1) 29%)');
    body.style.setProperty('--colorchanger6', 'linear-gradient(180deg, rgb(95, 95, 95) 0%, rgba(255,255,255,1) 29%)');
    var dayAndNight = document.getElementById("dayAndNight");
    dayAndNight.innerHTML = "Günaydın";
  }
  else{
    console.log("Saat Tespit Edilemedi")
  }
}



tarihSaat();
playlistItemGenerator();
playlistMainLastPlaylistGenerator();
playlistMainSpecialPlaylistGenerator();
playlistMainSpecialPlaylistGenerator2();
friendActivityGenerator();




const mainStage = document.getElementById('main-stage');
const colorChanger1 = document.getElementById('colorchanger1');
const colorChanger2 = document.getElementById('colorchanger2');
const colorChanger3 = document.getElementById('colorchanger3');
const colorChanger4 = document.getElementById('colorchanger4');
const colorChanger5 = document.getElementById('colorchanger5');
const colorChanger6 = document.getElementById('colorchanger6');

colorchanger1.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng1');
});

colorchanger1.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng1');
});

colorchanger2.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng2');
});

colorchanger2.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng2');
});

colorchanger3.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng3');
});

colorchanger3.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng3');
});

colorchanger4.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng4');
});

colorchanger4.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng4');
});

colorchanger5.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng5');
});

colorchanger5.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng5');
});

colorchanger6.addEventListener('mouseenter', function() {
  mainStage.classList.add('colorchng6');
});

colorchanger6.addEventListener('mouseleave', function() {
  mainStage.classList.remove('colorchng6');
});