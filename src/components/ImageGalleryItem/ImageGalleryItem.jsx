import PropTypes from 'prop-types';
import { GallaryItem } from './ImageGalleryItem.styled';
import { GallaryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export function ImageGalleryItem({ items }) {
  const [openModal, setOpenModal] = useState(false);

  const isModalOpen = e => {
    setOpenModal(true);
    if (e.target.nodeName === 'DIV') {
      closeModal();
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const key = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const { webformatURL, tags, largeImageURL } = items;

  return (
    <>
      <GallaryItem onClick={isModalOpen} onKeyDown={key} tabIndex="0">
        <GallaryItemImage src={webformatURL} alt={tags} />
        {openModal && <Modal largeImg={largeImageURL} imgAlt={tags} />}
      </GallaryItem>
    </>
  );
}

ImageGalleryItem.protoType = {
  items: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
