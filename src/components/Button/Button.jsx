import { LoadBtn } from './Button.styled';
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
