import { useState } from "react";
import styles from "./Modal.module.css";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal((showModal) => !showModal);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleModal}>Click to open</button>
      {showModal && (
        <>
          <div className={styles.overlay} onClick={handleModal}></div>
          <ModalDesc onClose={handleModal} />
        </>
      )}
    </div>
  );
}

function ModalDesc({ onClose }) {
  return (
    <div className={styles.modal}>
      <h3>Modal Description</h3>
      <p>
        This is a modal component. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim dicta facilis laudantium ipsum odit ducimus id,
        eveniet nam voluptas consectetur, fugiat dolore est aperiam quam facere
        reiciendis nostrum! Natus, sapiente?
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
