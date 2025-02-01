import { useState } from "react";
import styles from "./StarRating.module.css";

function StarRating() {
  const [hovering, setHovering] = useState(0);
  const [activeStars, setActiveStars] = useState([]);

  function handleHovering(index) {
    setHovering(index + 1);
    console.log(hovering);
  }
  function handleActive(index) {
    setActiveStars([...activeStars, index]);
    console.log(activeStars);
  }

  return (
    <div>
      <h1>Satr Rating</h1>
      <p>Hover on stars and click to choose</p>
      <div className={styles.container}>
        {Array.from({ length: 10 }, (_, ind) => {
          return (
            <span
              key={ind}
              onMouseEnter={() => handleHovering(ind)}
              onMouseLeave={() => handleActive(ind)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.starIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
