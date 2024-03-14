import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
const ImageGallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard
            photo={item.urls.small}
            description={item.alt_description}
            modalPhoto={item.urls.regular}
          ></ImageCard>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
