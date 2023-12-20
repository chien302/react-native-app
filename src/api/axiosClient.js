import axios from 'axios';

let baseUrl = process.env.VITE_BASE_URL;
const axiosClient = axios.create({
  // baseURL: 'http://192.168.1.45:8080/api/v1',
  baseURL: 'http://192.168.0.105:8080/api/v1', // chien
  // baseURL: 'http://192.168.1.42:8080/api/v1',
  //baseURL: 'http://192.168.1.10:8080/api/v1',
  // baseURL: 'http://128.16.4.254:8080/api/v1', //TA2_ACTVN_5Ghz_T34

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
