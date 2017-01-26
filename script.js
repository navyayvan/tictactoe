$(document).ready( function() { 

  var count = 0;
  var move;

  var one = document.getElementById("1");
  var two = document.getElementById("2");
  var three = document.getElementById("3");
  var four =document.getElementById("4");
  var five = document.getElementById("5");
  var six = document.getElementById("6");
  var seven = document.getElementById("7");
  var eight = document.getElementById("8");
  var nine = document.getElementById("9");
  var arrayTiles = [one, two, three, four, five, six, seven, eight, nine];

  var reset = document.getElementById("reset");
  var whichPlayer = document.getElementById("whichPlayer");
  var len = arrayTiles.length;

  function player() {
    debugger;
    if (count === 0) {
       move = 'x';
       whichPlayer.innerHTML = 'Player 2';
    } else if ( (count/2) % 1){
      move = 'o';
      whichPlayer.innerHTML = 'Player 1';
    } else {
      move = 'x';
      whichPlayer.innerHTML = 'Player 2';
    }
    count++;
  }

  function play() {
    player();
    this.innerHTML = move;
  }

  for (var i = 0; i < len; i++) {
    arrayTiles[i].addEventListener("click", play);
  }

  reset.addEventListener("click", function() {
    for (var j = 0; j < len; j++) {
      arrayTiles[j].innerHTML = '';
    }
    whichPlayer.innerHTML = 'Player 1 begins...';
  });


});



