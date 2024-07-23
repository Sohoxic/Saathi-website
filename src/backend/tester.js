const axios = require('axios');

const data = {
    username: 'exampleUser',
    password: 'examplePassword'
};

// Header should have data
axios.post('http://localhost:3000/users/login', null, {headers: data}).then(response => {
    console.log('Response:', response.data);
})
    .catch(error => {
        console.error('Error:', error);
    });
//
// axios.post('http://localhost:3000/users/signup', data)
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });