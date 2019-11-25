var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
let payload =     {  "name": "Serena",   
"link": "http://localhost:1337/serena.jpg"
};
// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/classes/Food').reply(200, {
  results: [
      payload
  ]
});
 
axios.get('/classes/Food')
  .then(function(response) {
    console.log(response.data === payload);
});

