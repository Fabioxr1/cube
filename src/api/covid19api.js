import axios from 'axios';

const country = 'https://api.covid19api.com/dayone/country/';

export default axios.create({
    baseURL: country
});