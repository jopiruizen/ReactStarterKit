import axios from 'axios';

export const getUsersAPI = () => {
    return new Promise((resolve, reject) => {
        const request = {};
        axios.get('/data/users.json', request)
          .then(res => {
            console.log("");
            console.log("");
            console.log("");
            console.log("AXIOS Response: ");
            console.log(res.data);
            resolve(res.data);
          })
          .catch(error => {
            reject(error);
          });
    });
}