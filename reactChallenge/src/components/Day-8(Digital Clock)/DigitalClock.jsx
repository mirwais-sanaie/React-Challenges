import { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <h1 className="time-segment">{clock}</h1>
      </div>
    </div>
  );
}

export default DigitalClock;
