import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=',
});

export default axiosAPI;