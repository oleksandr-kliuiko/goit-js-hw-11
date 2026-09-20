import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const inputQuery = document.querySelector('input[name="search-text"]');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = inputQuery.value.trim();

  if (query === '') {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: 'white',
    });
    return;
  }

  loader.classList.remove('is-hidden');

  getImagesByQuery(query)
    .then(response => {
      clearGallery();

      if (response.data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: 'white',
        });
      }

      createGallery(response.data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
});
