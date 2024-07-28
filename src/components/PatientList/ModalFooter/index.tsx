interface ModalFooterProps {
  handleCloseModal: () => void;
}

const ModalFooter = ({ handleCloseModal }: ModalFooterProps) => {
  return (
    <section>
      <button onClick={handleCloseModal}>Cancel</button>
      <button type="submit" form="editForm">
        Save Changes
      </button>
    </section>
  );
};

export default ModalFooter;
