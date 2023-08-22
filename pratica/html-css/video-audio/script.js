// var teste = document.getElementById('menu-velocidade');
// var tal = document.getElementById('velocidades')

// teste.addEventListener('click', funcaoTeste)

// function funcaoTeste() {
//     if (tal.style.display == "none"){
//         tal.style.display = 'block'
//     } else {
//         tal.style.display = 'none'
//     }
// }

let play = document.getElementById('play')
let pause = document.getElementById('pause');
let video = document.getElementById('video1');

play.addEventListener('click', function(){
    video.play();
})

pause.addEventListener('click', function(){
    video.pause();
})