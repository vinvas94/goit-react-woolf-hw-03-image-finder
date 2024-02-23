import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <Gallery>
      {images &&
        images.map(({ largeImageURL, tags, webformatURL, id }) => (
          <GalleryItem key={id}>
            <GalleryImage
              src={webformatURL}
              alt={tags}
              onClick={() => onClick(largeImageURL)}
            />
          </GalleryItem>
        ))}
    </Gallery>
  );
};

export default ImageGalleryItem;
