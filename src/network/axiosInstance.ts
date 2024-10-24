import axios from 'axios';

const API_VERSION = 3;

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWNlNzI5ZGNjYjc1Nzk4MTU5YmQ1NTc1MjUzNTI0MiIsIm5iZiI6MTcyOTc0NjY2NC42NzEyNjUsInN1YiI6IjY3MTljZjRkNWJlOWU4NzU5ZGE2ZGQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CRaTvR-R67HVxts401F1CIIbfbWKPlJjRQyHjbUw6ME';

const API = axios.create({
  baseURL: `https://api.themoviedb.org/${API_VERSION}/`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
});

API.interceptors.response.use(
  function onSuccess(response) {
    return response.data;
  },
  function onFail(error) {
    console.error(error);
    return null;
  },
);

export default API;
