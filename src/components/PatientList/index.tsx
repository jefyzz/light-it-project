import { useEffect, useState } from "react";
import PatientCard from "../PatientCard";
import Modal from "../Modal";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { Patient } from "../../interfaces/patient";
import styles from "./styles.module.css";

const API_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("edit");
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
      setShowModal(false);
    }
  };

  const handleAddPatientChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPatient) {
      const newPatient = {
        ...selectedPatient,
        id: `${patients.length + 1}`,
        createdAt: new Date().toISOString(),
      };
      setPatients([...patients, newPatient]);
      setShowModal(false);
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
    setShowModal(false);
  };

  const handleAddPatient = () => {
    const newPatient: Patient = {
      id: `${patients.length + 1}`,
      name: "",
      avatar: "",
      createdAt: "",
      description: "",
      website: "",
    };
    setSelectedPatient(newPatient);
    setModalType("add");
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleAddPatient}>Add new patient</button>
      <div className={styles.main}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          patients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              setShowModal={(show) => {
                setSelectedPatient(patient);
                setModalType("edit");
                setShowModal(show);
              }}
              setSelectedPatient={setSelectedPatient}
            />
          ))
        )}
        {showModal && (
          <Modal
            key={selectedPatient?.id ?? "non-existent"}
            setOpenModal={setShowModal}
            title={modalType === "edit" ? "Edit Patient" : "Add Patient"}
            body={
              <ModalBody
                handleSaveChanges={
                  modalType === "edit"
                    ? handleSaveChanges
                    : handleAddPatientChanges
                }
                handleInputChange={handleInputChange}
                selectedPatient={selectedPatient}
              />
            }
            footer={<ModalFooter handleCloseModal={handleCloseModal} />}
          />
        )}
      </div>
    </>
  );
};

export default PatientList;
