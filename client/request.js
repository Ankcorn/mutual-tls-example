const axios = require('axios');

async function requestExtraction(message) {
  try {
    console.log('sending request')
    const result = await axios.post('http://localhost:3050/api/extract', {message});
    console.log(result.status)
    return result.data
  } catch(e) {
      console.log(e.message);
      throw e
  }
}

module.exports = requestExtraction;
