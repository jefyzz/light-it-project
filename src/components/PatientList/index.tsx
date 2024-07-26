import PatientCard from "../PatientCard";
import patients from "../../utils/patients.json";
import styles from "./styles.module.css";

const PatientList = () => {

  return (
    <section className={styles.main}>
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </section>
  );
};

export default PatientList;
