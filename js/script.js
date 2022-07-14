// Declarações

const musicList = [
    {
        img : 'img/projeto-sola.jpg',
        name : 'Colossenses 1',
        author : 'Projeto Sola',
        music : 'musics/colossenses1.mp3'
    },
    {
        img : 'img/em-paz.jpg',
        name : 'Em Paz',
        author : 'Hillsong em Português',
        music : 'musics/em-paz.mp3'
    },
    {
        img : 'img/Filho-Deus.jpg',
        name : 'Filho de Deus',
        author : 'Paulo Cesar Baruk',
        music : 'musics/filho-Deus.mp3'
    },
    {
        img : 'img/good-grace.jpg',
        name : 'Good Grace',
        author : 'Hillsong UNITED',
        music : 'musics/good-grace.mp3'
    },
    {
        img : 'img/grandes-coisas.jpg',
        name : 'Grandes Coisas',
        author : 'Fernandinho',
        music : 'musics/grandes-coisas.mp3'
    },
    {
        img : 'img/grandioso-Deus.jpg',
        name : 'Grandioso Deus',
        author : 'Purples',
        music : 'musics/grandioso-Deus.mp3'
    },
    {
        img : 'img/hosanna.jpg',
        name : 'Hosanna',
        author : 'Hillsong UNITED',
        music : 'musics/hosanna.mp3'
    },
    {
        img : 'img/projeto-sola.jpg',
        name : 'Isaías 53',
        author : 'Projeto Sola',
        music : 'musics/isaias53.mp3'
    },
    {
        img : 'img/oceans.jpg',
        name : 'Oceans',
        author : 'Hillsong UNITED',
        music : 'musics/oceans.mp3'
    },
    {
        img : 'img/surrender.jpg',
        name : 'I Surrender',
        author : 'Hillsong Worship',
        music : 'musics/surrender.mp3'
    }
];

let music = document.getElementById('audio');
let musicIndex = 0;

let musicDuration = document.querySelector('.total-time');
let trackArt = document.getElementById('trackArt')
let trackTitle = document.getElementById('trackTitle')
let trackAuthor = document.getElementById('trackAuthor')

musicRender(musicIndex)

// Eventos
document.getElementById('btnPlay').addEventListener('click', playMusic);
document.getElementById('btnPause').addEventListener('click', stopMusic);
music.addEventListener('timeupdate', updateBar);

document.querySelector('#btnNext').addEventListener('click', ()=>{
    musicIndex++
    if(musicIndex > musicList.length){
        musicIndex = 0
    }

    musicRender(musicIndex)
    music.play()
});

document.querySelector('#btnPrev').addEventListener('click', ()=>{
    musicIndex--
    if(musicIndex < 0){
        musicIndex = musicList.length
    }

    musicRender(musicIndex)
    music.play()
});

// Funções
function musicRender(i){
    music.setAttribute('src', musicList[i].music)
    music.addEventListener('loadeddata', ()=>{
        trackTitle.textContent = musicList[i].name;
        trackAuthor.textContent = musicList[i].author;
        trackArt.style.backgroundImage = `url(${musicList[i].img})`;
        musicDuration.textContent = secToMin(Math.floor(music.duration));
    })
}

function playMusic(){
    music.play()
    document.getElementById('btnPlay').style.display= 'none';
    document.getElementById('btnPause').style.display= 'block';
    document.querySelector('.container').classList.add('active');
}

function stopMusic(){
    music.pause()
    document.getElementById('btnPause').style.display= 'none';
    document.getElementById('btnPlay').style.display= 'block';
    document.querySelector('.container').classList.remove('active');
}

function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration)*100) + '%';
    let elapTime = document.querySelector('.curr-time');
    elapTime.textContent = secToMin(Math.floor(music.currentTime));
}

function secToMin(sec){
    let minField = Math.floor(sec/60);
    let secField = sec % 60;
    if(secField < 10){
        secField = '0' + secField;
    }

    return minField + ':' + secField;
}