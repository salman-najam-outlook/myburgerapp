import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-appp.firebaseio.com'
});


export default instance;