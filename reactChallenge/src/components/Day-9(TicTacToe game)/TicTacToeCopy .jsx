import { useState } from "react";
import "./TicTacToeCopy.css";

function TicTacToeCopy() {
  const [board, setBoard] = useState(new Array(9).fill(null)); //[null , null , null.... , null[index =9]]
  const [xIsTurn, setXisTurn] = useState(true);
  const [winner, setWinner] = useState("");

  function calculateWinner(board) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const winnings of winningLines) {
      const [a, b, c] = winnings;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }
    if (board.every((cell) => cell !== null)) {
      return "Draw";
    }

    return null;
  }

  function handleCellClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsTurn ? "X" : "O";
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
    } else {
      setXisTurn(!xIsTurn);
    }
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
      {/* <button id="reset" onClick={resetGame}>
        Reset Game
      </button> */}
      {/* <div id="status">{getStatusMessage()}</div> */}
      <div id="status">{winner}</div>
    </div>
  );
}

export default TicTacToeCopy;
