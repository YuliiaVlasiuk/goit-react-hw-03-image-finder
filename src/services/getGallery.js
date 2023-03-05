const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true';
const API_KEY = '32926611-8cada7c2f97f927ebc9aab067';

const count = 40;

export const getGallery = searchText => {
  return fetch(
    `${BASE_URL}&key=${API_KEY}&q=${searchText}&per_page=${count}&page=1`
  );
};
