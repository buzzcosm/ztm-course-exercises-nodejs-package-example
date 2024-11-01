const axios = require('axios');

axios.get('https://www.wikipedia.org')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally done!');
  });