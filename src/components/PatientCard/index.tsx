import { useState } from "react";
import { Patient } from "../../interfaces/patient";

import styles from "./styles.module.css";

const PatientCard = ({ patient }: { patient: Patient }) => {
  const [showDetails, setShowDetails] = useState(false);

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
          {patient.details.map((detail) => (
            <div className={styles.detailRow} key={detail.label}>
              <p className={styles.label}>{detail.label}:</p>
              {detail.value.startsWith("http") ? (
                <a
                  href={detail.value}
                  className={styles.value}
                >
                  {detail.value}
                </a>
              ) : (
                <p className={styles.value}>{detail.value}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientCard;
