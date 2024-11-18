const axios = require('axios');

async function testPostSubject() {
  try {
    const response = await axios.post('http://localhost:3000/subject/', {
      name: 'AAD',
      lector: 'AAA'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


(async () => {
  await testPostSubject();
})()