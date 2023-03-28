import axios from 'axios';
import PropTypes from 'prop-types';
axios.defaults.baseURL =
  'https://pixabay.com/api/?&key=32444596-f2f4d32c85d571017a032d14e&image_type=photo&orientation=horizontal&per_page=12';

export const getPhoto = async (q, page) => {
  const response = await axios.get('', {
    params: {
      page,
      q,
    },
  });
  return response.data.hits;
};

getPhoto.protoType = {
  q: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
