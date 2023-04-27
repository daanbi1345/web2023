const allMusic = [
    {
        name : "1. Rain on me",
        artist : "Lady Gaga(ft Ariana Grande)",
        img : "music_view01",
        audio: "music_audio01"
    }, {
        name : "2. Juicy",
        artist : "Doja Cat",
        img : "music_view02",
        audio: "music_audio02"
    }, {
        name : "3. My hair",
        artist : "Ariana Grande",
        img : "music_view03",
        audio: "music_audio03"
    }, {
        name : "4. Ungodly Hour",
        artist : "Chloe x Halle",
        img : "music_view04",
        audio: "music_audio04"
    }, {
        name : "5. Feels",
        artist : "Calvin Harris(ft. Pharrell Williams, Katy Perry, Big Sean)",
        img : "music_view05",
        audio: "music_audio05"
    }, {
        name : "6. Potion",
        artist : "Calvin Harris(ft Dua Lipa & Young Thug)",
        img : "music_view06",
        audio: "music_audio06"
    }, {
        name : "7. Circle",
        artist : "SAAY(ft Tich Hyman)",
        img : "music_view07",
        audio: "music_audio07"
    }, {
        name : "8. Truth Hurts",
        artist : "Lizzo",
        img : "music_view08",
        audio: "music_audio08"
    }, {
        name : "9. Sweetest Pie",
        artist : "Megan Thee Stallion & Dua Lipa",
        img : "music_view09",
        audio: "music_audio09"
    }, {
        name : "10. I Feel It Comming",
        artist : "The Weeknd",
        img : "music_view10",
        audio: "music_audio10"
    }
        
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .images img");
const musicAudio = musicWrap.querySelector("#main__audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress= musicWrap.querySelector(".progress");
const musicProgressBar= musicWrap.querySelector(".progress .bar");
const musicProgressCurrent= musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration= musicWrap.querySelector(".progress .timer .duration");

let musicIndex = 3; // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;  //뮤직 파일
}

// 재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

// 정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
    }

// 이전 곡 재생
const prevMusic = () => {
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;

    loadMusic(musicIndex);
    playMusic();
}

// 다음 곡 재생
const nextMusic = () => {
    // 1 2 3 4 5 6 7 8 9 1 2 3 4 5 ...
    // musicIndex++;
    // if(musicIndex == 9){
    //     musicIndex == 1;
    // }

    // musicIndex == 9 ? musicIndex = 1 : musicIndex++;

    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    
    loadMusic(musicIndex);
    playMusic();
}

// 재생 진행바
musicAudio.addEventListener("timeupdate", e => {
    
    const currentTime = e.target.currentTime; // 현재 재생되는 시간
    const duration = e.target.duration; // 오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100; // 전체 길이에서 현재 진행되는 시간을 백분위 단위로 나누면

    musicProgressBar.style.width = `${progressWidth}%`;

    // 전체 시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);

        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth; // 전체 진행바의 총 길이
    let clickedFoffsetX = e.offsetX; // 진행바를 기준으로 측정되는 x 좌표 값
    let songDuration = musicAudio.duration; // 오디오 전체 길이

    // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedFoffsetX / progressWidth) * songDuration;
});

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused"); // 음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});

// 이전 곡 버튼
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

// 다음 곡 버튼
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    // musicAudio.play();
});