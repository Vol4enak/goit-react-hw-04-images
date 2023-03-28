import axios from 'axios';

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
