// Declarações

const musicList = [
    {
        img : 'img/projeto-sola.jpg',
        name : 'Colossenses 1',
        artist : 'Projeto Sola',
        music : 'musics/colossenses1.mp3'
    },
    {
        img : 'img/em-paz.jpg',
        name : 'Em Paz',
        artist : 'Hillsong em Português',
        music : 'musics/em-paz.mp3'
    },
    {
        img : 'img/Filho-Deus.jpg',
        name : 'Filho de Deus',
        artist : 'Paulo Cesar Baruk',
        music : 'musics/filho-Deus.mp3'
    },
    {
        img : 'img/good-grace.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'musics/Rather Be.mp3'
    },
    {
        img : 'img/grandes-coisas.jpg',
        name : 'Grandes Coisas',
        artist : 'Fernandinho',
        music : 'musics/grandes-coisas.mp3'
    },
    {
        img : 'img/grandioso-Deus.jpg',
        name : 'Grandioso Deus',
        artist : 'Purples',
        music : 'musics/grandioso-Deus.mp3'
    },
    {
        img : 'img/hosanna.jpg',
        name : 'Hosanna',
        artist : 'Hillsong UNITED',
        music : 'musics/hosanna.mp3'
    },
    {
        img : 'img/projeto-sola.jpg',
        name : 'Isaías 53',
        artist : 'Projeto Sola',
        music : 'musics/projeto-sola.mp3'
    },
    {
        img : 'img/oceans.jpg',
        name : 'Oceans',
        artist : 'Hillsong UNITED',
        music : 'musics/oceans.mp3'
    },
    {
        img : 'img/surrender.jpg',
        name : 'I Surrender',
        artist : 'Hillsong Worship',
        music : 'musics/surrender.mp3'
    }
];

let music = document.getElementById('audio');
let musicIndex = 0;

let musicDuration = document.querySelector('.total-time');
let trackArt = document.getElementById('trackArt').style.backgroundImage = `url(${musicList[0].img})`;
let trackTitle = document.getElementById('trackTitle').textContent = musicList[0].name;
let trackAuthor = document.getElementById('trackAuthor').textContent = musicList[0].artist;

// Eventos
document.getElementById('btnPlay').addEventListener('click', playMusic);
document.getElementById('btnPause').addEventListener('click', stopMusic);

// Funções
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


// inspiration: https://github.com/joaotinti75/Projetos-Javascript/blob/main/projeto_spotify_parte_2/script.js