import { useState } from "react";
import { ModalBodyProps } from "../../../interfaces/components";
import styles from "./styles.module.css";

const ModalBody = ({
  handleSaveChanges,
  handleInputChange,
  selectedPatient,
}: ModalBodyProps) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!selectedPatient?.name) {
      newErrors.name = "Name is required";
    }
    if (!selectedPatient?.description) {
      newErrors.description = "Description is required";
    }
    if (!selectedPatient?.avatar) {
      newErrors.avatar = "Avatar URL is required";
    }
    if (!selectedPatient?.website) {
      newErrors.website = "Website is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
          handleSaveChanges(e);
        }
      }}
      id="editForm"
      className={styles.form}
    >
      <label htmlFor="name" className={styles.label}>
        Name:
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={selectedPatient?.name ?? ""}
        onChange={handleInputChange}
        className={styles.input}
      />
      {errors.name && <div className={styles.error}>{errors.name}</div>}

      <label htmlFor="description" className={styles.label}>
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        value={selectedPatient?.description ?? ""}
        onChange={handleInputChange}
        className={styles.textarea}
      />
      {errors.description && (
        <div className={styles.error}>{errors.description}</div>
      )}

      <label htmlFor="website" className={styles.label}>
        Website:
      </label>
      <input
        id="website"
        type="text"
        name="website"
        value={selectedPatient?.website ?? ""}
        onChange={handleInputChange}
        className={styles.input}
      />
      {errors.website && <div className={styles.error}>{errors.website}</div>}

      <label htmlFor="avatar" className={styles.label}>
        Avatar URL:
      </label>
      <input
        id="avatar"
        type="text"
        name="avatar"
        value={selectedPatient?.avatar ?? ""}
        onChange={handleInputChange}
        className={styles.input}
      />
      {errors.avatar && <div className={styles.error}>{errors.avatar}</div>}
    </form>
  );
};

export default ModalBody;
