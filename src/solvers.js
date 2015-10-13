/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n:n}); //fixme
  // create empty matrix, solution
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      if(!solution.hasRowValue(i) && !solution.hasColValue(j)){
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n:n}); //fixme



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n}); //fixme
  var row = 0;

  var recurse =  function(board, row) {
    if (row === n) {
      return;
    }
    for (var i =0; i < n; i++) { //every column
      if (!board.hasColValue(i) && !board.hasDiagonalValue(row, i)) {
        board.togglePiece(row, i);
        if (i === n -1 && row === n-1) {
          return board;
        }
        recurse(board, row + 1);
        board.togglePiece(row, i);
        
      }
    }
    row--;
    return;
  }
  recurse(solution, row);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n:n});
  if (n === 0) {
    return 1;
  }
  var count = 0;
  var recurse =  function(board, row) {
    // if (row === n) {
    //   return;
    // }
    for (var i =0; i < n; i++) { //every column
      if (!board.hasColValue(i) && !board.hasDiagonalValue(row, i)) {
        board.togglePiece(row, i);
        if (row === n-1) {
          count++;
        } 
        recurse(board, row +1);
        board.togglePiece(row, i);
      }
    }
    // return;
  }
  recurse(solution, 0);

  console.log('Number of solutions for ' + n + ' queens:', count);
  return count;
};
