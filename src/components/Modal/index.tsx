import React from "react";
import styles from "./styles.module.css";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

// TODO: finish styling the modal
// TODO: right now, the modal opens fixed on the position 0 0, but it should open in the center of the screen

const Modal: React.FC<ModalProps> = ({
  setOpenModal,
  header,
  body,
  footer,
}) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.modalBackground} onClick={closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.titleCloseBtn}>
          <button onClick={closeModal} className={styles.closeBtn}>X</button>
        </div>
        <div className={styles.header}>{header}</div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
