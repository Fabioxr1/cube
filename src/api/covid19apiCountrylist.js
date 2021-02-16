import axios from 'axios';

const country = 'https://api.covid19api.com/countries';

export default axios.create({
    baseURL: country
});