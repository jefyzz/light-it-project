import { useState } from "react";
import { Patient } from "../../interfaces/patient";

import styles from "./styles.module.css";

const PatientCard = ({ patient }: { patient: Patient }) => {
  const [showDetails, setShowDetails] = useState(false);
  const date = new Date(patient.createdAt);
  return (
    <div className={styles.container}>
      <img src={patient.avatar} alt={patient.name} className={styles.img} />
      <span className={styles.textContainer}>
        <p className={styles.name}>{patient.name}</p>
        <p className={styles.id}>Patient ID: #{patient.id}</p>
      </span>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={styles.icon}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12.586l-4.293-4.293-1.414 1.414L10 15.414l5.707-5.707-1.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showDetails && (
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
      )}
    </div>
  );
};

export default PatientCard;
