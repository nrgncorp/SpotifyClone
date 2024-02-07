let playstatus = 1;

document.getElementById('playButton').addEventListener('click', playButonu);

function playButonu() {
    var playButonuElementi = document.getElementById("playButton");
    let playSvg1 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>';
    let playSvg2 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>';

    if (playstatus === 1) {
        // Clear existing content before adding new content
        playButonuElementi.innerHTML = '';
        playButonuElementi.insertAdjacentHTML('beforeend', playSvg2);
        playstatus = 0;
    } else {
        playButonuElementi.innerHTML = '';
        playButonuElementi.insertAdjacentHTML('beforeend', playSvg1);
        playstatus = 1;
    }
}

let replayStatus = 0;
const replayButtonElement = document.getElementById('replayButton');
const replaySvg1 = '<svg class="Svg-sc-ytk21e-3" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>';
const replaySvg2 = '<svg class="Svg-sc-ytk21e-2" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>';
const replaySvg3 = '<svg class="Svg-sc-ytk21e-2" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25z"></path><path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path></svg>';
replayButtonElement.addEventListener('click', function () {
    replayStatus = (replayStatus + 1) % 3;
    updateReplayButton();
});

function updateReplayButton() {
    if (replayStatus === 0) {
        replayButtonElement.innerHTML = replaySvg1;
    } else if (replayStatus === 1) {
        replayButtonElement.innerHTML = replaySvg2;
    } else if (replayStatus === 2) {
        replayButtonElement.innerHTML = replaySvg3;
    }
}

let mixStatus = 0;
const mixButtonElement = document.getElementById('mixButton');
const mixSvg1 = '<svg class="Svg-sc-ytk21e-3" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>';
const mixSvg2 = '<svg class="Svg-sc-ytk21e-2" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>';

mixButtonElement.addEventListener('click', function () {
    mixStatus = (mixStatus + 1) % 2;
    updateMixButton();
});

function updateMixButton() {
    if (mixStatus === 0) {
        mixButtonElement.innerHTML = mixSvg1;
    } else if (mixStatus === 1) {
        mixButtonElement.innerHTML = mixSvg2;
    }
}

let playStatus = 0;
const playButtonElement = document.getElementById('nowPlay');
const playSvg1 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-3 settingButtonHover kPpCsU"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>';
const playSvg2 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-2 settingButtonHover kPpCsU"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>';

playButtonElement.addEventListener('click', function () {
    playStatus = (playStatus + 1) % 2;
    updatePlayButton();
});

function updatePlayButton() {
    if (playStatus === 0) {
        playButtonElement.innerHTML = playSvg1;
    } else if (playStatus === 1) {
        playButtonElement.innerHTML = playSvg2;
    }
}

let lyricStatus = 0;
const lyricButtonElement = document.getElementById('lyricButton');
const lyricSvg1 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-3 settingButtonHover kPpCsU"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>';
const lyricSvg2 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-2 settingButtonHover kPpCsU"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>';

lyricButtonElement.addEventListener('click', function () {
    lyricStatus = (lyricStatus + 1) % 2;
    updateLyricButton();
});

function updateLyricButton() {
    if (lyricStatus === 0) {
        lyricButtonElement.innerHTML = lyricSvg1;
    } else if (lyricStatus === 1) {
        lyricButtonElement.innerHTML = lyricSvg2;
    }
}

let queeStatus = 0;
const queeButtonElement = document.getElementById('queeButton');
const queeSvg1 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-3 settingButtonHover kPpCsU"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>';
const queeSvg2 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-2 settingButtonHover kPpCsU"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>';

queeButtonElement.addEventListener('click', function () {
    queeStatus = (queeStatus + 1) % 2;
    updateQueeButton();
});

function updateQueeButton() {
    if (queeStatus === 0) {
        queeButtonElement.innerHTML = queeSvg1;
    } else if (queeStatus === 1) {
        queeButtonElement.innerHTML = queeSvg2;
    }
}

let connectStatus = 0;
const connectButtonElement = document.getElementById('connectButton');
const connectSvg1 = '<svg data-encore-id="icon" role="presentation" aria-hidden="true" class="Svg-sc-ytk21e-3 settingButtonHover kPpCsU" viewBox="0 0 16 16"><path d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 12h-8.5A1.75 1.75 0 0 1 2 10.25v-6.5zm1.75-.25a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-8.5zM.25 15.25A.75.75 0 0 1 1 14.5h14a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75z"></path></svg>';
const connectSvg2 = '<svg data-encore-id="icon" role="presentation" aria-hidden="true" class="Svg-sc-ytk21e-2 settingButtonHover kPpCsU" viewBox="0 0 16 16"><path d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 12h-8.5A1.75 1.75 0 0 1 2 10.25v-6.5zm1.75-.25a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-8.5zM.25 15.25A.75.75 0 0 1 1 14.5h14a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75z"></path></svg>';

connectButtonElement.addEventListener('click', function () {
    connectStatus = (connectStatus + 1) % 2;
    updateConnectButton();
});

function updateConnectButton() {
    if (connectStatus === 0) {
        connectButtonElement.innerHTML = connectSvg1;
    } else if (connectStatus === 1) {
        connectButtonElement.innerHTML = connectSvg2;
    }
}

let fullScreenStatus = 0;
const fullScreenButtonElement = document.getElementById('fullScreenButton');
const fullScreenSvg1 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-3 settingButtonHover kPpCsU"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg>';
const fullScreenSvg2 = '<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-2 settingButtonHover kPpCsU"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg>';

fullScreenButtonElement.addEventListener('click', function () {
    fullScreenStatus = (fullScreenStatus + 1) % 2;
    updateFullScreenButton();
});

function updateFullScreenButton() {
    if (fullScreenStatus === 0) {
        fullScreenButtonElement.innerHTML = fullScreenSvg1;
    } else if (fullScreenStatus === 1) {
        fullScreenButtonElement.innerHTML = fullScreenSvg2;
    }
}