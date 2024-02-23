import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClick={onClick} />
    </Gallery>
  );
};

export default ImageGallery;
