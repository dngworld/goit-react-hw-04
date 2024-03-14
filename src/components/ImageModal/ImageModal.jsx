import Modal from 'react-modal';
import css from './ImageModal.module.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const ImageModal = ({ photoModal, description, isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <img src={photoModal} />
        <p className={css.description}>{description}</p>
      </Modal>
    </div>
  );
};
export default ImageModal;
