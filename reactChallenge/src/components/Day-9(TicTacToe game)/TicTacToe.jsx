import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function calculateWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
      }
    }

    // Check for a draw
    if (board.every((cell) => cell !== null)) {
      return "Draw";
    }

    return null;
  }

  function handleCellClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
    } else {
      // Switch turns
      setIsXNext(!isXNext);
    }
  }

  function getStatusMessage() {
    if (winner) {
      return winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`;
    }
    return `Next Player: ${isXNext ? "X" : "O"}`;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  }

  return (
    <div id="game-container">
      <h1>Tic Tac Toe</h1>
      <div id="tic-tac-toe">
        {board?.map((value, index) => (
          <div
            key={index}
            className="cell"
            data-index={index}
            onClick={() => handleCellClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button id="reset" onClick={resetGame}>
        Reset Game
      </button>
      <div id="status">{getStatusMessage()}</div>
    </div>
  );
}

export default TicTacToe;
