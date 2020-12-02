import {
    AuthState,
    BurgerBuilderState,
    OrderState,
} from '@nx-react-burger-app/shared/interfaces';

export interface State {
    burgerBuilder: BurgerBuilderState;
    order: OrderState;
    auth: AuthState;
}
