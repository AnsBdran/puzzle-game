import Modal from "react-modal";

const ModalWrapper = ({ isOpen = true }) => {
  console.log('inside modal ', isOpen)
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
    >
      <section className=" bg-blue-300 h-full flex justify-center items-center">
        <p>hi you</p>
      </section>
    </Modal>
  );
};

export default ModalWrapper;
