import { useEffect, useState } from "react";
import PatientCard from "../PatientCard";
import Modal from "../Modal";
import styles from "./styles.module.css";
import { Patient } from "../../interfaces/patient";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const API_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPatient) {
      const updatedPatients = patients.map((patient) =>
        patient.id === selectedPatient.id ? selectedPatient : patient
      );
      setPatients(updatedPatients);
      setShowEditModal(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (selectedPatient) {
      const { name, value } = e.target;
      setSelectedPatient({ ...selectedPatient, [name]: value });
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className={styles.main}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            setShowEditModal={setShowEditModal}
            setSelectedPatient={setSelectedPatient}
          />
        ))
      )}
      {showEditModal && (
        <Modal
          key={selectedPatient?.id ?? "non-existent"}
          setOpenModal={setShowEditModal}
          title="Edit Patient"
          body={
            <ModalBody
              handleSaveChanges={handleSaveChanges}
              handleInputChange={handleInputChange}
              selectedPatient={selectedPatient}
            />
          }
          footer={<ModalFooter handleCloseModal={handleCloseModal} />}
        />
      )}
    </div>
  );
};

export default PatientList;
