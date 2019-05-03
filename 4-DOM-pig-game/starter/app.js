/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*document.getElementById("new-game").addEventListener('click',function(){

});
*/
var player1_active = document.getElementsByClassName("player-0-panel")[0];
var player2_active = document.getElementsByClassName("player-1-panel")[0];

var globalscore_1 = 0;
var globalscore_2 = 0;
var current_score1=0;
var current_score2=0;

init();


var new_game = document.getElementsByClassName("btn-new")[0];
new_game.addEventListener('click',init);

var hold = document.getElementsByClassName("btn-hold")[0];
hold.addEventListener('click',holding);

var roll = document.getElementsByClassName("btn-roll")[0];
roll.addEventListener('click',function(){
    var dice = Math.floor((Math.random()*6) + 1);
    if(dice == 1){
        current_score1=0;
        current_score2=0;
        holding();
    }
    else{
        if(player1_active.classList.contains("active")){
            current_score1+=dice;
            document.getElementById("current-0").innerHTML = current_score1;
        }
        else{
            current_score2+=dice;
            document.getElementById("current-1").innerHTML = current_score2;
        }
        dice_image = 'dice-'+dice+'.png';
        var dice_i = document.getElementsByClassName("dice")[0];
        dice_i.src = dice_image;
        document.querySelector(".dice").style.display = 'block';
    }
});

function init(){

    current_score1=0;
    current_score2=0;
    gobalscore_1 = 0;
    globalscore_2 = 0;
    document.querySelector(".dice").style.display = 'none';
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
}

function holding(){
    
    
    
    if(player1_active.classList.contains("active")){
        globalscore_1+=current_score1;
    }
    else{
        globalscore_2+=current_score2;
    }
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("score-0").innerHTML = globalscore_1;
    document.getElementById("score-1").innerHTML = globalscore_2;
    current_score1 = 0;
    current_score2 = 0;
    if(globalscore_1>=10){
        player1_active.classList.add("winner");
        player1_active.classList.remove("active");
        document.getElementById("name-0").innerHTML = 'WINNER';

        document.querySelector(".dice").style.display = 'none';
    }
    else if(globalscore_2>=100){
        document.getElementById("name-1").innerHTML = 'WINNER';
        player2_active.classList.add("winner");
        player2_active.classList.remove("active");
        document.querySelector(".dice").style.display = 'none';

    }
    else{
        player1_active.classList.toggle("active");
        player2_active.classList.toggle("active");
    }
}
