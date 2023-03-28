import { GallaryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export const ImageGallery = ({ items }) => {
  return (
    <GallaryList>
      {items.map(index => (
        <ImageGalleryItem key={index.id} items={index} />
      ))}
    </GallaryList>
  );
};

ImageGallery.protoType = {
  items: PropTypes.object.isRequired,
};