import axiosClient from '../api/axiosClient';

const HandleAuthToken = token => {
  console.log('token authtoken: ');
  console.log(token);
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
};

export default HandleAuthToken;
