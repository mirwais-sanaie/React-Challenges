import { useState } from "react";

import { useEffect } from "react";

function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [miliSecond, setMiliSecond] = useState(0);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setTimer(0);
    setIsRunning(false);
    setMiliSecond(0);
  }

  useEffect(() => {
    let intervalTimer;
    let intervalMiliSecond;

    if (isRunning) {
      intervalTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      intervalMiliSecond = setInterval(() => {
        setMiliSecond((prevMiliSecond) =>
          prevMiliSecond === 99 ? 0 : prevMiliSecond + 1
        );
      }, 10);
    }

    return () => {
      clearInterval(intervalTimer);
      clearInterval(intervalMiliSecond);
    };
  }, [isRunning]);

  return (
    <div>
      <div>
        <h1>
          {timer}
          <sub>s</sub> <sub>{miliSecond}</sub>
        </h1>
      </div>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default StopWatch;
