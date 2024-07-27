import { useEffect, useState } from "react";
import PatientCard from "../PatientCard";
import Modal from "../Modal";
import styles from "./styles.module.css";
import { Patient } from "../../interfaces/patient";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedPatient) {
      const { name, value } = e.target;
      setSelectedPatient({ ...selectedPatient, [name]: value });
    }
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
          header={<h2>Edit Patient</h2>}
          body={
            <form onSubmit={handleSaveChanges} id="editForm">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={selectedPatient?.name ?? ""}
                onChange={handleInputChange}
              />
              <label htmlFor="description">Description:</label>
              <input
                id="description"
                type="text"
                name="description"
                value={selectedPatient?.description ?? ""}
                onChange={handleInputChange}
              />
              <label htmlFor="avatar">Avatar URL:</label>
              <input
                id="avatar"
                type="text"
                name="avatar"
                value={selectedPatient?.avatar ?? ""}
                onChange={handleInputChange}
              />
              <label htmlFor="website">Website:</label>
              <input
                id="website"
                type="text"
                name="website"
                value={selectedPatient?.website ?? ""}
                onChange={handleInputChange}
              />
            </form>
          }
          footer={
            <div>
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
              <button type="submit" form="editForm">
                Save Changes
              </button>
            </div>
          }
        />
      )}
    </div>
  );
};

export default PatientList;
