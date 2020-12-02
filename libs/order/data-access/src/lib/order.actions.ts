import {
    LoadOrders,
    LoadOrdersFailure,
    LoadOrdersSuccess,
    OrderActions,
    PurchaseBurger,
    PurchaseBurgerFailure,
    PurchaseBurgerSuccess,
} from '@nx-react-burger-app/shared/interfaces';

export const purchaseBurger = (): PurchaseBurger => {
    return {
        type: OrderActions.PURCHASE_BURGER,
    };
};

export const purchaseBurgerSuccess = (
    orderId: number,
    orders: []
): PurchaseBurgerSuccess => {
    return {
        type: OrderActions.PURCHASE_BURGER_SUCCESS,
        orders,
        orderId,
    };
};

export const purchaseBurgerFailure = (error: Error): PurchaseBurgerFailure => {
    return {
        type: OrderActions.PURCHASE_BURGER_FAILURE,
        error,
    };
};

export const loadOrders = (token: string, userId: string): LoadOrders => {
    return {
        type: OrderActions.LOAD_ORDERS,
        token,
        userId,
    };
};

export const loadOrdersSuccess = (orders: []): LoadOrdersSuccess => {
    return {
        type: OrderActions.LOAD_ORDERS_SUCCESS,
        orders,
    };
};

export const loadOrdersFailure = (error: Error): LoadOrdersFailure => {
    return {
        type: OrderActions.LOAD_ORDERS_FAILURE,
        error,
    };
};
