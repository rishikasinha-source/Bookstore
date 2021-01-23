import axios from 'axios';
export default class axiosService {

  post=(url, data, isHeaderRequired=false) => {
    return  axios.post(url, data, isHeaderRequired)
      }
  Get = (url, data, isHeaderRequied = false) => {
    return axios.get(url, data, isHeaderRequied)
      }
}