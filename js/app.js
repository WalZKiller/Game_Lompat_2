//player initialization
const player = document.getElementById('player');

//enemy initialization
const enemy = document.getElementById('enemy');

//score initialization
let score = 0
const scoreText = document.getElementById('score'); 

//jump
function jump() {

    //add jump animation to player
    player.classList.add('jump-animation');

    //remove jump animation from player selepas player landing
    
    setTimeout (() => {
        player.classList.remove('jump-animation');
    }, 750);
}

//keypress event listener
document.addEventListener('keypress', function(e) {

    //if player doesnt have jump animation
    if(!player.classList.contains('jump-animation')){
        //execute jump animation
        jump();
    }
});

//score timer, update every millisecond
setInterval(function(){
    score++;
    scoreText.innerText = score;

    let enemyPos = parseInt(window.getComputedStyle(enemy).getPropertyValue('right'));
    let playerPos = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));

    if(playerPos < 140 && enemyPos > 800 && enemyPos < 1000){
        console.log("hit");
    }
});

//convert pixel to vmin
//function converter(val1, val2){}

