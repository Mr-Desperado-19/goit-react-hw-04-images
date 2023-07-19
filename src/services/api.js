const API_KEY = '35951094-a93acafa222cd42a3edf336d6';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (query, page) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error fetching images');
    })
    .then(res => res)
    .catch(error => console.log(error));
};