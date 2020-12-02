import axios from 'axios';

export const loadOrders = (queryParams: string) => {
    return axios.get(`/orders.json${queryParams}`);
};
