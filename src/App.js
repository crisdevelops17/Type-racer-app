import React, {useState, useEffect, useRef} from "react"
import useWordGame from "./hooks/useWordGame";

function App() {
  
  const {text,handleChange,isTimeRunning,startGame,textBoxRef,timeRemaining,wordCount,pb} = useWordGame()
  return (
    <div>
      <h2>TYPETRACER!</h2>
      <h1>How fast do you type?</h1>
      <textarea 
        value={text} 
        onChange={handleChange} 
        disabled = {!isTimeRunning}
        ref={textBoxRef}
      />
       
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
      onClick={startGame}
      >
        Start
      </button>
      <h1>Word Count:{wordCount}</h1>
      <h2>Personal Best:{pb}</h2>
    </div>
  );
}

export default App;
