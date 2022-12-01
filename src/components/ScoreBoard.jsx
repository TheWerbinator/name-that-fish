import React from "react";

const ScoreBoard = ({ correctCount, incorrectCount, fish }) => {

  return (
    <div className="scoreboard-wrapper">
      <h2>Correct✅: {correctCount}</h2>
      <div className="fish-possibilities">
        {fish.length ? <h3>Possible Guesses</h3> : null}
        <div className="fish-tally">
          {fish.map((f) => <div className="fish-name" key={f.name}><h2>{f.name}</h2></div> )}
        </div>
      </div>
      <h2>Incorrect❌: {incorrectCount}</h2>
    </div>
  )
}

export default ScoreBoard;