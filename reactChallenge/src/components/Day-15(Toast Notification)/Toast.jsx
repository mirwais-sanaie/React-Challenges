import { useEffect } from "react";
import "./Toast.css";

function Toast({ message, type, onClose }) {
  useEffect(
    function () {
      const interval = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(interval);
    },
    [onClose]
  );

  return <div className={`toast ${type}`}>{message}</div>;
}

export default Toast;
