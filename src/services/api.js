import axios from 'axios';

// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`;

const API_KEY = '27846082-466a06211f9d2392907268ab0';

export const getImages = async (search, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
