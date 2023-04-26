const musicWrap = document.querySelector(".nusic__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist= musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
let musicIndex = 9;         //현재 음악 인덱스
//음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;                   //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;               //아티스트 이름
    musicView.src = `../game/img/${allMusic[num-1].img}.png`;     //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                         //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;        //뮤직 파일
}
window.addEventListener("load", () => {
    loadMusic(musicIndex);
    musicAudio.play();
});