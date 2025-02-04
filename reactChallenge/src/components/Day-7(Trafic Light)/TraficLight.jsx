import { useEffect, useState } from "react";
import "./TraficLight.css";

function TraficLight() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const changeLight = () => {
      setActiveLight((prevLight) => {
        switch (prevLight) {
          case "red":
            return "yellow";
          case "green":
            return "red";
          case "yellow":
            return "green";
          default:
            return "red";
        }
      });
    };

    const redTimer = setTimeout(() => {
      if (activeLight === "red") changeLight();
    }, 4000);

    const yellowTimer = setTimeout(() => {
      if (activeLight === "yellow") changeLight();
    }, 1500);

    const greenTimer = setTimeout(() => {
      if (activeLight === "green") changeLight();
    }, 3000);

    return () => {
      clearTimeout(redTimer);
      clearTimeout(yellowTimer);
      clearTimeout(greenTimer);
    };
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <Light color="#ff0000" active={activeLight === "red"} />
      <Light color="#ffff00" active={activeLight === "yellow"} />
      <Light color="#00cc00" active={activeLight === "green"} />
    </div>
  );
}

const Light = ({ color, active }) => (
  <div
    className="light"
    style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }}
  />
);

export default TraficLight;
