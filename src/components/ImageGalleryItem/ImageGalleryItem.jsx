import { GallaryItem } from './ImageGalleryItem.styled';
import { GallaryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
export function ImageGalleryItem() {
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

  const { webformatURL, tags, largeImageURL } = this.props.items;
  const { isOpenModal } = this.state;
  return (
    <>
      <GallaryItem onClick={isModalOpen} onKeyDown={key} tabIndex="0">
        <GallaryItemImage src={webformatURL} alt={tags} />
        {isOpenModal && <Modal largeImg={largeImageURL} imgAlt={tags} />}
      </GallaryItem>
    </>
  );
}
