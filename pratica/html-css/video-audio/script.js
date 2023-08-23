let play = document.getElementById('play')
let pause = document.getElementById('pause');
let video = document.querySelector('video');

play.addEventListener('click', function(){
    video.play();
})

pause.addEventListener('click', function(){
    video.pause();
})


let retroceder = document.getElementById('retroceder');
let avancar = document.getElementById('avancar');

retroceder.addEventListener('click', function(){
    video.currentTime -= 5;
});

avancar.addEventListener('click', function(){
    video.currentTime += 5;
});


let menu = document.getElementById('menu-velocidade');
let vel = document.getElementById('velocidades');

function menuVel() {
    if (vel.style.display == "none"){
        vel.style.display = 'block'
    } else {
        vel.style.display = 'none'
    }
};


let vel05 = document.getElementById('vel0.5');
let vel10 = document.getElementById('vel1.0');
let vel15 = document.getElementById('vel1.5');
let vel20 = document.getElementById('vel2.0');

vel05.addEventListener('click', function(){
    video.playbackRate = 0.50;
});
vel10.addEventListener('click', function(){
    video.playbackRate = 1;
});
vel15.addEventListener('click', function(){
    video.playbackRate = 1.50;
});
vel20.addEventListener('click', function(){
    video.playbackRate = 2;
});