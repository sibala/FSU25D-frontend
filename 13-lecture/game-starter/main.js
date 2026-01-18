/**
 * Work with strings.
 */
window.addEventListener("DOMContentLoaded", function() {
  'use strict';
  let rockford = document.getElementById('baddie1'),
    area = document.getElementById('flash'),
    left = area.offsetLeft, // CSS positioning
    top  = area.offsetTop,
    posLeft = 0,          // Steps to right/left
    posTop = 0,
    tileSize = 32,        // tile size in height/width -> 32px
    gridSize = 24,        // grid size 24*24
    
    

    /**
     * This is the background for the game area.
     */
    gameArea = [
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,16,16,14,12,16,17,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,16,17,14,17,13,15,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,15,15,13,14,12,16,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,15,15,17,17,16,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,17,17,15,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,17,17,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,16,24,14,12,13,14,17,16,16,16,13,14,12,13,14,19,21,
      13,14,12,13,14,12,13,14,12,13,14,17,13,14,12,16,16,12,13,19,18,18,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,17,12,13,19,18,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,15,16,14,12,20,21,21,21,21,21,21,
      13,14,12,13,14,12,13,14,12,13,14,12,13,15,15,13,19,21,21,21,21,21,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,20,21,21,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,21,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,
    ],

    /**
     * These are blocks that cant be moved to, or something happens when you try to move on them.
     * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,26,24,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,26,24,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,25,25,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,13,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,12,10,10,10,10,10,19,
      19,10,10,10,10,10,11,10,10,10,10,10,10,10,10,10,13,10,10,10,10,10,10,19,
      19,10,10,10,10,10,11,10,10,10,10,10,10,10,10,10,13,10,10,10,10,10,10,19,
      19,10,10,10,10,10,11,11,11,12,11,11,10,10,10,10,13,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,11,11,10,10,10,10,13,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,13,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,13,13,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,13,13,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,12,12,18,11,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,12,12,10,11,13,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,12,14,10,10,13,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,13,10,13,13,13,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,13,13,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
    ];

    /**
     * Draw the initial gameplan
    */
   function drawGamePlan(gameArea, gameBlocks) {
     let e;
     for(let i = 0; i < gameArea.length; i++) {
       // i = 0
       // e = <div></div>
       e = document.createElement('div');

       // e = <div class="tile t13 b19"></div>
       //gameArea[0]
       //gameBlocks[0]
       e.className = 'tile t' + gameArea[i] + ' b' + gameBlocks[i];

       // e = <div class="tile t13 b19" id="n0"></div>
       // e = <div class="tile t14 b19" id="n1"></div>
       // e = <div class="tile t12 b19" id="n2"></div>
       // e = <div class="tile t13 b19" id="n3"></div>
       e.id = 'n' + i;
       area.appendChild(e);
      } 
    };
    console.log('Drawing gameplan.');  
    drawGamePlan(gameArea, gameBlocks);
    
    
    /**
     * Move Rockford
    */
   let move = function(moveLeft, moveTop, which) {
     
     function moveIt() {
       rockford.style.left = (area.offsetLeft + posLeft*tileSize + tileSize/2) + 'px';
       rockford.style.top  = (area.offsetTop + posTop*tileSize + tileSize/2) + 'px';      
       console.log("Moved to: " + rockford.style.left + "x" + rockford.style.top);
      };
      if(which) { rockford.className='baddie ' + which; }
      
      
      // First if means the baddie can movie
      if(!(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize]-10)) {
        posLeft += moveLeft; 
        posTop  += moveTop;
        moveIt();

      // Opens the door by pulling the rod
      } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 20) { 
        area.innerHTML = "<div id='baddie1' class='baddie down'></div>";   // Removes the board, but makes sure the baddie is readded
        gameBlocks[344] = 10;                 // Removes the door
        drawGamePlan(gameArea, gameBlocks);   // Redraws the board, with the removed door
        rockford = document.getElementById('baddie1');
        moveIt()

      // Plays a sound when trying to enter the closed door
      } else if(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 18) {
        let audio = new Audio('sounds/trying-to-open-a-locked-door-104302.mp3');
        audio.volume = 0.2 //Volumne 0-1
        audio.play()

      // Plays a sound when arriving to the Emerald, and also giving a Success message 
      } else if (gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] == 14) {
        let audio = new Audio('sounds/chaos-emerald-323237.mp3');
        audio.volume = 0.2 //Volumne 0-1
        audio.play()
        alert("Congratz, You have arrived to Emerald City")

      // Else means the baddie cannot move because of a wall
      } else {  
        console.log('Block detected, cant move.');
      }
      console.log("area.offsetLeft", area.offsetLeft);
      console.log("area.offsetTop", area.offsetTop);
      console.log("posLeft", posLeft)
      console.log("posTop", posTop)
    };
    console.log('Moving Mickey Mos (Rockford) to initial spot.');  
    move(1, 1, 'down');
    
    
    /**
     * Keep track on keys pressed and move Rockford accordingly.
    */
   document.onkeydown = function(event) {
    let key;
    key = event.keyCode || event.which;
    switch(key) {
      case 37: move(-1, 0, 'left'); break;
      case 39: move(1, 0, 'right'); break;
      case 38: move(0, -1, 'up'); break;
      case 40: move(0, 1, 'down'); break; 
      default: move(0, 0, 'down'); break;
    };
    console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + rockford.offsetLeft + ', ' + rockford.offsetTop);
  };

    console.log('Everything is ready.');  
});