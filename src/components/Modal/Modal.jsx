import { Overlay, ModalWin } from './Modal.styled';
import PropTypes from 'prop-types';
export const Modal = ({ largeImg, imgAlt }) => {
  return (
    <Overlay>
      <ModalWin>
        <img src={largeImg} alt={imgAlt} />
      </ModalWin>
    </Overlay>
  );
};
Modal.propType = {
  largeImg: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};