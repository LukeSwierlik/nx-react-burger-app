import { watchBurgerBuilder } from '@nx-react-burger-app/burger-builder/data-access';
import { watchOrders } from '@nx-react-burger-app/order/data-access';
import { all, fork } from 'redux-saga/effects';

export const rootSaga = function* root() {
    yield all([fork(watchBurgerBuilder), fork(watchOrders)]);
};
