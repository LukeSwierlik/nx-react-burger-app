import { Ingredient } from './burger-builder.interfaces';

export interface OrderState {
    orders: Order[];
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
    orders: Order[];
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
    orders: Order[];
}

export interface LoadOrdersFailure {
    type: typeof OrderActions.LOAD_ORDERS_FAILURE;
    error: Error;
}

export interface Client {
    country: string;
    deliveryMethod: 'cheapest' | 'fastest';
    email: string;
    name: string;
    street: string;
    zipCode: string;
}

export interface Order {
    ingredients: Ingredient[];
    client: Client;
    price: number;
    userId: string;
}
