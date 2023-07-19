const API_KEY = '35951094-a93acafa222cd42a3edf336d6';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error('Error fetching images');
  } catch (error) {
    console.log(error);
  }
};
