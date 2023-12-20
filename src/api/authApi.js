import axiosClient from './axiosClient';

const authApi = {
  login: data => {
    return axiosClient.post('/auth/login', data);
  },
  register: data => {
    return axiosClient.post('/auth/register', data);
  },
  getCurrentUser: () => {
    return axiosClient.get('/auth/me');
  },
  getChatByUserId: params => {
    return axiosClient.get('/auth/get-chat-by-userId', params);
  },
};
export default authApi;
