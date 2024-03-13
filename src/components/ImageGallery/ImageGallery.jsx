import ImageCard from '../ImageCard/ImageCard';
const ImageGallery = ({ items, onClick }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onClick(item)}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
