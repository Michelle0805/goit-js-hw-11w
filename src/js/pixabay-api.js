
export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42350253-ebc1b0dfb4ad39356c0e12da6n';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};