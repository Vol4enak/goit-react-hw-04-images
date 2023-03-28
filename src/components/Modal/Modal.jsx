import { Overlay, ModalWin } from './Modal.styled';

export const Modal = ({ largeImg, imgAlt }) => {
  return (
    <Overlay>
      <ModalWin>
        <img src={largeImg} alt={imgAlt} />
      </ModalWin>
    </Overlay>
  );
};
