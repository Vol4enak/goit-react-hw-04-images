import { GallaryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ items }) => {
  return (
    <GallaryList>
      {items.map(index => (
        <ImageGalleryItem key={index.id} items={index} />
      ))}
    </GallaryList>
  );
};
