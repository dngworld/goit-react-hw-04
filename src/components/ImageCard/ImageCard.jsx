import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';
import css from './ImageCard.module.css';
const ImageCard = ({ photo, description, modalPhoto }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <img
        className={css.item}
        width={400}
        src={photo}
        alt={description}
        onClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          photoModal={modalPhoto}
          description={description}
        ></ImageModal>
      )}
    </div>
  );
};
export default ImageCard;
