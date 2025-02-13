import { useState } from "react";
import "./ParentCom.css";
import Toast from "./Toast";

function ParentCom() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    // const id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
    const id = crypto.randomUUID();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="App">
      <h1>React Toast App</h1>
      <button onClick={() => addToast("Log in succesfuly", "success")}>
        Show Success Toast
      </button>
      <button onClick={() => addToast("Error!", "error")}>
        Show Error Toast
      </button>
      <button onClick={() => addToast("Info!", "info")}>Show Info Toast</button>
      <button onClick={() => addToast("Warning!", "warning")}>
        Show Warning Toast
      </button>

      <div className="toast-container">
        {toasts?.map((toast, index) => (
          <Toast
            key={index}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ParentCom;
