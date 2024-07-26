import styles from "./styles.module.css";

function Modal({
  setOpenModal,
}: {
  readonly setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className={styles.body}>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

/*
<div className={styles.details}>
          <div className={styles.detailRow}>
            <p className={styles.label}>Created At:</p>
            <p className={styles.value}>{date.toLocaleDateString()}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.label}>Description:</p>
            <p className={styles.value}>{patient.description}</p>
          </div>
          <div className={styles.detailRow}>
            <p className={styles.label}>Website:</p>
            <p className={styles.value}>{patient.website}</p>
          </div>
        </div>
*/
