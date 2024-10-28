import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.API_BASE_URL}/${process.env.API_VERSION}/`,
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
