import React, { useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Time : {seconds}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
