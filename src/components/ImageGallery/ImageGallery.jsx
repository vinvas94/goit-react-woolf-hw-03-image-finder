import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images.map(({ largeImageURL, tags, webformatURL, id }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
