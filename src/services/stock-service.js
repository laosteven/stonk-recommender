import axios from 'axios';

export default {
    fetchStockService() {
        const response = axios.get('http://localhost:3000/data');
        return response;
    },
};
