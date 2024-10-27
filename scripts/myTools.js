var status = document.getElementById('status');
var game = document.getElementById('game')
var start = document.getElementById('start');
var boundary = document.querySelectorAll('.boundary');
var end = document.getElementById('end');
var win = true;

function lost(){
    document.getElementById("status").innerHTML="You Lost! :(";
    document.getElementById("status").style.color='red';
    document.getElementById('game').style.backgroundColor='red';
    win = false;
    GameEnd();
}
function won(){
    document.getElementById("status").innerHTML="You Win! :)";
    document.getElementById("status").style.color='green';
    document.getElementById('game').style.backgroundColor='green';
    win = true;
    GameEnd();
}
function GameEnd(){
    start.removeEventListener('mouseover',GameStart);
    game.removeEventListener('mouseleave',Cheating);
    boundary.forEach((element)=>{
        element.removeEventListener('mouseover',boundaries);
    });
    end.removeEventListener('mouseover',YouWin);
    setTimeout(()=>{location.reload();},1000);

}
function GameStart() {
    document.getElementById('status').innerHTML = 'Try not to hit the borders!';
    game.addEventListener('mouseleave', Cheating);
    boundaries();
    YouWin();
}
function Cheating(event) {
    if (!game.contains(event.relatedTarget)) {
        lost();
    }
}
function boundaries() {
    boundary.forEach((element) => {
        element.addEventListener("mouseover", lost);
    });
}

function YouWin() {
    end.addEventListener("mouseover", () => {
        if (win) {
            won();
        }
    });
}