import { LoadBtn } from './Button.styled';
export const DowlandMore = ({ onSearch }) => {


  return (
    <LoadBtn
      onClick={() => {
        onSearch();
      }}
    >
      Load More
    </LoadBtn>
  );
};
