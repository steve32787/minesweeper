document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { 
  cells:[
{row:0, col:0, isMine: false, hidden: true, surroundingMines: 2}, {row:0, col:1, isMine: true, hidden: true, surroundingMines: 2}, {row:0, col:2, isMine: false, hidden: true, surroundingMines: 2}, {row:0, col:3, isMine: false, hidden: true, surroundingMines: 2},
{row:1, col:0, isMine: false, hidden: true}, {row:1, col:1, isMine: true, hidden: true}, {row:1, col:2, isMine: false, hidden: true}, {row:1, col:3, isMine: true, hidden: true},
{row:2, col:0, isMine: true, hidden: true}, {row:2, col:1, isMine: false, hidden: true}, {row:2, col:2, isMine: false, hidden: true}, {row:2, col:3, isMine: true, hidden: true},
{row:3, col:0, isMine: false, hidden: true}, {row:3, col:1, isMine: true, hidden: true}, {row:3, col:2, isMine: true, hidden: true}, {row:3, col:3, isMine: false, hidden: true}]
}






function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
 board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin)
  }  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let winner = 0;
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
    return
  } else if (!board.cells[i].isMine && board.cells[i].hidden === true) {
return
  }
  }
  return lib.displayMessage('You win!')
}

  
 

  //loop through all board.cells
  //Each cell .isMine && .isMarked != False.

  //If mine exists is not marked, Not won yet - return to exit out of function.

  //If mine marked, but cell still hidden = true - has not work yet = return out of function

  //if && true, player won.  DisplayMessage function.  


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let totalCount = 0
  for (i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine != false) {
      totalCount ++;
    } 
  }
return totalCount
  
}

//return the number of cells around the current cell that has isMine propert true
//var surroundingCells = getSurroundingCells(row, col);
//row and col out of cell object - dot and bracket notation.
//loop through surrounding cells returned from getSurroundingCells - check and add count variable if true
//return correct count
