import { call, put, takeEvery } from 'redux-saga/effects';
import { OrderActions } from '@nx-react-burger-app/shared/interfaces';
import { loadOrdersFailure, loadOrdersSuccess } from './order.actions';
import { loadOrders } from './order.service';

export function* watchOrders() {
    yield takeEvery(OrderActions.LOAD_ORDERS, loadOrders$);
}

function* loadOrders$(action) {
    const { token, userId } = action;

    try {
        const queryParams =
            '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

        const { data } = yield call(() => loadOrders(queryParams));
        const fetchedOrders = [];

        console.log('[ActionOrder] res: ', data);

        for (const key in data.data) {
            fetchedOrders.push({
                ...data.data[key],
                id: key,
            });
        }

        yield put(loadOrdersSuccess(fetchedOrders));
    } catch (error) {
        yield put(loadOrdersFailure(error));
    }
}
