import React from "react";
import styles from "./styles.module.css";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, title, body, footer }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.modalBackground} onClick={closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.titleContainer}>
          <button onClick={closeModal} className={styles.closeBtn}>
            X
          </button>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
