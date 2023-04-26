const allMusic = [
    {
        name : "1. Rain on me",
        artist : "Lady Gaga(ft.Ariana Grande)",
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
        name : "4. 음악제목",
        artist : "가수 이름",
        img : "music_view04",
        audio: "music_audio04"
    }, {
        name : "5. 음악제목",
        artist : "가수 이름",
        img : "music_view05",
        audio: "music_audio05"
    }, {
        name : "6. 음악제목",
        artist : "가수 이름",
        img : "music_view06",
        audio: "music_audio06"
    }, {
        name : "7. 음악제목",
        artist : "가수 이름",
        img : "music_view07",
        audio: "music_audio07"
    }, {
        name : "8. 음악제목",
        artist : "가수 이름",
        img : "music_view08",
        audio: "music_audio08"
    }, {
        name : "9. 음악제목",
        artist : "가수 이름",
        img : "music_view09",
        audio: "music_audio09"
    }, {
        name : "10. 음악제목",
        artist : "가수 이름",
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

let musicIndex = 3; // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;  //뮤직 파일
}

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {

});

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});