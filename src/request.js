const axios = require('axios');

axios.get('https://www.google.com')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('All done!');
  });