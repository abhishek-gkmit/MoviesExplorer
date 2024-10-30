import axios from 'axios';
import ApiConstants from '@constants/ApiConstants';

const { API_BASE_URL, API_VERSION } = ApiConstants;

const axiosInstance = axios.create({
  baseURL: `${ApiConstants.API_BASE_URL}/${API_VERSION}/`,
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  function onSuccess(response) {
    return response.data;
  },
  function onFail(error) {
    console.error(error);
    return null;
  },
);

export default axiosInstance;
