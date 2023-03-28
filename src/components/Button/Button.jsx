import { LoadBtn } from './Button.styled';
import PropTypes from 'prop-types';
export const DowlandMore = ({ onSearch }) => {


  return (
    <LoadBtn
      onClick={() => {
        onSearch(1);

      }}
    >
      Load More
    </LoadBtn>
  );
};
DowlandMore.propTypes = {
  onSearch: PropTypes.func.isRequired,
};