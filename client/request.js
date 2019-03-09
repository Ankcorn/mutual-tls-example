const request = require('request-promise');
const fs = require('fs');
const path = require('path');

async function requestExtraction(message) {
  try {
    const result = await request({
      uri:"https://localhost/api/extract",
      body:{ message },
      method: 'POST',
      json: true,
      cert: fs.readFileSync(path.join(__dirname,'../nginx/client/ee.crt')),
      key: fs.readFileSync(path.join(__dirname,'../nginx/client/ee.key')),
      ca: fs.readFileSync(path.join(__dirname,'../nginx/ca/ca.crt'))
    });
    return result;
  } catch (e) {
    throw e;
  }
}

module.exports = requestExtraction;
