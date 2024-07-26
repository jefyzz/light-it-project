import React, { useState } from 'react';
import { Patient } from "../../interfaces/patient";
import styles from "./styles.module.css";

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const [showMore, setShowMore] = useState(false);
  const date = new Date(patient.createdAt);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
// TODO: move img to the right, and reorder the card based on that.
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <img src={patient.avatar} alt={patient.name} className={styles.img} />
        <p className={styles.id}>ID: #{patient.id}</p>
      </section>
      <span className={styles.textContainer}>
        <p className={styles.name}>{patient.name}</p>
        <p className={styles.description}>
          {showMore ? patient.description : `${patient.description.substring(0, 100)}...`}
          <button onClick={toggleShowMore} className={styles.showMore}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </p>
        <a href={patient.website} className={styles.name}>{patient.website}</a>
      </span>
      <section className={styles.buttonsContainer}>
      </section>
    </div>
  );
};

export default PatientCard;


{/* <button onClick={() => console.log('open edit modal')} className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="28"
            height="28"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ce81b7"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M46.57422,3.42578c-0.94922,-0.94922 -2.19531,-1.42578 -3.44141,-1.42578c-1.24609,0 -2.49219,0.47656 -3.44141,1.42578c0,0 -0.07031,0.06641 -0.16016,0.16016c-0.00781,0.00781 -0.01953,0.01172 -0.02734,0.01953l-35.20312,35.19922c-0.12109,0.125 -0.21094,0.27734 -0.25781,0.44922l-2.00781,7.48828c-0.09375,0.34375 0.00391,0.71094 0.25781,0.96484c0.19141,0.19141 0.44531,0.29297 0.70703,0.29297c0.08594,0 0.17188,-0.01172 0.25781,-0.03516l7.48828,-2.00781c0.17188,-0.04687 0.32422,-0.13672 0.44922,-0.26172l35.19922,-35.19531c0.01172,-0.01172 0.01563,-0.02734 0.02344,-0.03906c0.08984,-0.08984 0.15234,-0.15234 0.15234,-0.15234c1.90625,-1.90234 1.90625,-4.98437 0.00391,-6.88281zM45.16016,4.83984c1.11719,1.11719 1.11719,2.9375 0,4.05469c-0.33203,0.32813 -0.61328,0.61328 -0.85547,0.85547l-4.05469,-4.05469c0.46094,-0.46094 0.85547,-0.85547 0.85547,-0.85547c0.53906,-0.54297 1.26172,-0.83984 2.02734,-0.83984c0.76563,0 1.48438,0.30078 2.02734,0.83984zM5.60547,41.15234l3.24219,3.24219l-4.43359,1.19141z"></path>
              </g>
            </g>
          </svg>
        </button> */}