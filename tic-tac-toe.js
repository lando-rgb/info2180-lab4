var state = [];
window.onload = function(){
  this.play();
  document.getElementsByClassName("btn")[0].onclick = function(){
      
    state.length = 0;
    var newGame = document.getElementById('board').children;
    for ( let i = 0; i < newGame.length; i++){
      newGame[i].innerHTML= "";
    }
  document.getElementById("status").classList.remove("you-won")
  document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
  
}
 for (let j = 0; j <board[i].length; j++){
   board[j].setAttribute("unSelectable", "on")
 }
}

function play(){
   var board = document.getElementById('board').children;    
   for( let i = 0; i < board.length; i++){
      board[i].classList.add("square");
      board[i].onmouseover = function(){board[i].classList.toggle("hover",true)}
      board[i].onmouseout = function(){board[i].classList.toggle("hover",false)}
      board[i].onclick = function(){
          if (board[i].innerHTML == "" || board[i].innerHTML == "O"){
              board[i].classList.add("X");
              board[i].innerHTML = "X";
              state.push('X');
              checkWinner(board);
          }
          else {
              board[i].classList.add("O");
              board[i].innerHTML = "O";
              state.push("X");
              checkWinner(board)
            }
      
      }
      
  }
  if(board[i].innerHTML != "") return;

}
function checkWinner(click){
    var s = document.getElementById('status');
      if (click[0].innerHTML != "" && click[0].innerHTML == click[1].innerHTML && click[0].innerHTML == click[2].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML =   "Congratulations! "+ click[0].innerHTML + " is the Winner!"
       }
       else if (click[3].innerHTML != "" && click[3].innerHTML == click[4].innerHTML && click[3].innerHTML == click[5].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[3].innerHTML + " is the Winner!"
       }
       else if (click[6].innerHTML != "" && click[6].innerHTML == click[7].innerHTML && click[6].innerHTML == click[8].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[6].innerHTML + " is the Winner!"
       
       }
       else if (click[0].innerHTML != "" && click[0].innerHTML == click[3].innerHTML && click[0].innerHTML == click[6].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[0].innerHTML + " is the Winner!"
       }
       else if (click[1].innerHTML != "" && click[1].innerHTML == click[4].innerHTML && click[1].innerHTML == click[7].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[1].innerHTML + " is the Winner!"
       }
       else if (click[0].innerHTML != "" && click[0].innerHTML == click[4].innerHTML && click[0].innerHTML == click[8].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[0].innerHTML + " is the Winner!"
       }
       else if (click[6].innerHTML != "" && click[6].innerHTML == click[4].innerHTML && click[6].innerHTML == click[2].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML =  "Congratulations! "+ click[6].innerHTML + " is the Winner!"
       }
       else if (click[2].innerHTML != "" && click[2].innerHTML == click[5].innerHTML && click[2].innerHTML == click[8].innerHTML){
          s.classList.toggle("you-won");
          s.innerHTML = "Congratulations! "+ click[2].innerHTML + " is the Winner!"
       }
  
}


  

