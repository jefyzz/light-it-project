import { Patient } from "./patient";

export interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export interface PatientCardProps {
  patient: Patient;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
}

export interface ModalBodyProps {
  handleSaveChanges: (e: React.FormEvent) => void;
  selectedPatient: Patient | null;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}