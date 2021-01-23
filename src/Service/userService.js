import Axios from './axiosService.js';

const axios = new Axios();

export default class UserService {
    baseUrl = "https://backend-bookstore.herokuapp.com"

    signup = (data) => {
        return axios.post(`${this.baseUrl}/bookstore_user/registration`, data);
    }
    signin = (data) => {
        return axios.post(`${this.baseUrl}/bookstore_user/login`, data);
    }
     getBooks = () => {
        return axios.Get(`${this.baseUrl}/bookstore_user/get/book`);
    }
}