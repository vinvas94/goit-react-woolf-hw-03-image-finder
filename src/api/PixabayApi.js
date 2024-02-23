import axios from 'axios';
import { Notify } from 'notiflix';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40010712-6d7af93e262d6e116d716f3d5';

async function SearchImages(query, page) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  });

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&${params}&page=${page}`
    );

    if (response.data.hits.length === 0) {
      Notify.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return null;
    }
    return response.data;
  } catch (error) {
    Notify.error(error.message);
    return null;
  }
}

export default SearchImages;
