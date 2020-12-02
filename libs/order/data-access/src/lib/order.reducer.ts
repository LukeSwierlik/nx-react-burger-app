import { OrderState } from '@nx-react-burger-app/shared/interfaces';
import produce from 'immer';

const initialState: OrderState = {
    orders: [],
    loaded: false,
    purchased: false,
};

export const OrderReducer = produce((state = initialState, action) => {
    return state;
});
