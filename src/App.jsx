import { useState } from "react"
import CellComponent from "./components/CellComponent";
import messages from "./messages";

const App = () => {

  const [cells, setCells] = useState(Array(9).fill(""));
  const [whoPlay, setWhoPlay] = useState("cross");
  const [winner, setWinner] = useState(null);


  const handleClick = (index) => {
    if (cells[index] !== "" || winner) return;

    const updatedCells = [...cells];
    updatedCells[index] = whoPlay;
    setCells(updatedCells);
    setWhoPlay(whoPlay === "cross" ? "circle" : "cross")

    checkWinner(updatedCells)
  }

  const checkWinner = (currentCells) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    // console.log(currentCells);

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      // console.log(combo);
      console.log(currentCells[a]);
      if (
        currentCells[a] &&
        currentCells[a] === currentCells[b] &&
        currentCells[b] === currentCells[c]
      ) {
        setWinner(currentCells[a]);
        return;
      }

      if (!currentCells.includes("")) {
        setWinner("draw");
      }

    }
  }

  const handleResetGame = () => {
    setCells(Array(9).fill(""));
    setWhoPlay('cross')
    setWinner(null);
  }

  const msgIndex = Math.floor(Math.random() * messages.length);
  console.log(messages);
  
  return (
    <div className="app">
      {winner ?
        <div className="loveScreen">
          <h1 className="loveText">{messages[8]}</h1>
          <button onClick={handleResetGame} className="restartBtn">Igraj ponovo</button>
        </div> :
        <div className="squareContainer">
          {cells.map((cell, index) => {
            return <CellComponent
              key={index}
              id={index}
              cell={cell}
              handleClick={handleClick}
            />
          })}
        </div>
      }
    </div>
  )
}

export default App