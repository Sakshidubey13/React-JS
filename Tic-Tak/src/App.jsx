import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const boxRefs = useRef([]);
  const titleRef = useRef();
  const winnerRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "bounce"
    });
  }, []);

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let pattern of winPatterns) {
      const [a,b,c] = pattern;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);

        gsap.fromTo(
          winnerRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: "elastic" }
        );

        return;
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);

    gsap.fromTo(
      boxRefs.current[index],
      { scale: 0 },
      { scale: 1, duration: 0.4, ease: "back.out(2)" }
    );

    checkWinner(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
  };

  const buttonHover = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      rotation: 2,
      duration: 0.3
    });
  };

  const buttonLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      rotation: 0,
      duration: 0.3
    });
  };

  return (
    <div className="container">
      <h1 ref={titleRef}>Tic Tac Toe GSAP</h1>

      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            className="box"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>

      {winner && (
        <div ref={winnerRef} className="winner">
          Winner is {winner}
        </div>
      )}

      <button
        onClick={resetGame}
        onMouseEnter={buttonHover}
        onMouseLeave={buttonLeave}
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;