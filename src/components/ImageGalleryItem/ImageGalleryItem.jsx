import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ largeImageURL, tags, webformatURL, onClick }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        onClick={() => onClick(largeImageURL)}
        alt={tags}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
