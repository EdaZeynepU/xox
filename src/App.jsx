import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [flippedLst, setflippedLst] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(true);
  const playerLst = ["X", "O"];
  const [unflippedCard, setUnflippedCard] = useState(8);

  function checkWinLinear(board) {
    for (let i = 0; i < 9; i += 3) {
      if (unflippedCard == 0) {
        setWinner("no one");
    }
      if (
        board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2] &&
        board[i] !== ""
      ) {
        setWinner(board[i]);
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[i] === board[i + 3] &&
        board[i + 3] === board[i + 6] &&
        board[i] !== ""
      ) {
        setWinner(board[i]);
      }
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
      setWinner(board[0]);
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
      setWinner(board[2]);
    }
  }

  const handleClick = (index) => {
    if (!winner) {
      if (flippedLst[index] == "") {
        const tempLst = [...flippedLst];
        tempLst[index] = player ? playerLst[0] : playerLst[1];

        setflippedLst(tempLst);
        checkWinLinear(tempLst);
        setPlayer((prev) => !prev);
        setUnflippedCard((prev) => prev - 1);
      } else {
        console.log("already taken");
      }
    }
  };

  return (
    <>
      <div className={`${winner ? " fade-in" : ""}`}>
        <p className={`${winner ? "" : "hidden-t"} win-text`}>{winner} won</p>
      </div>
      <div className={`${winner ? "hidden-t " : "text-bg"} `} >
        <p className={`${winner ? "hidden-t" : ""} turn-text`}>
          {player ? playerLst[0] : playerLst[1]}s turn
        </p>
      </div>
      <div className="card-table">
        {flippedLst.map((val, index) => (
          <Card
            key={index}
            flippedLst={flippedLst}
            handleClick={handleClick}
            index={index}
            val={val}
          />
        ))}
      </div>
    </>
  );
}

export default App;
