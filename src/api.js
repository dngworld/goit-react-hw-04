import axios from 'axios';

const fetchPhoto = async (query, page) => {
  const accessKey = 'mr4k7GzS0FI2Tgq5GJxSBbFfbG3htgd7pWqi-QEI_QU';
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${accessKey}`,
    {
      params: {
        query,
        page,
        per_page: 16,
      },
    }
  );
  return response.data;
};
export default fetchPhoto;
