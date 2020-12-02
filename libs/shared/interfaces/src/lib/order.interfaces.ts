export interface OrderState {
    orders: [];
    loaded: boolean;
    purchased: boolean;
}

export enum OrderActions {
    PURCHASE_BURGER = '[Order] Purchase Burger',
    PURCHASE_BURGER_SUCCESS = '[Order] Purchase Burger Success',
    PURCHASE_BURGER_FAILURE = '[Order] Purchase Burger Failure',
    LOAD_ORDERS = '[Order] Load Orders',
    LOAD_ORDERS_SUCCESS = '[Order] Load Orders Success',
    LOAD_ORDERS_FAILURE = '[Order] Load Orders Failure',
}

export interface PurchaseBurger {
    type: typeof OrderActions.PURCHASE_BURGER;
}

export interface PurchaseBurgerSuccess {
    type: typeof OrderActions.PURCHASE_BURGER_SUCCESS;
    orderId: number;
    orders: any[];
}

export interface PurchaseBurgerFailure {
    type: typeof OrderActions.PURCHASE_BURGER_FAILURE;
    error: Error;
}

export interface LoadOrders {
    type: typeof OrderActions.LOAD_ORDERS;
    token: string;
    userId: string;
}

export interface LoadOrdersSuccess {
    type: typeof OrderActions.LOAD_ORDERS_SUCCESS;
    orders: any[];
}

export interface LoadOrdersFailure {
    type: typeof OrderActions.LOAD_ORDERS_FAILURE;
    error: Error;
}
