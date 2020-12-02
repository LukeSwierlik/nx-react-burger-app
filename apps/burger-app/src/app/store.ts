import { State } from '@nx-react-burger-app/shared/interfaces';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BurgerBuilderReducer } from '@nx-react-burger-app/burger-builder/data-access';
import { OrderReducer } from '@nx-react-burger-app/order/data-access';
import { AuthReducer } from '@nx-react-burger-app/auth/data-access';
import { rootSaga } from './root.sagas';

export const rootReducers = combineReducers<State>({
    burgerBuilder: BurgerBuilderReducer,
    order: OrderReducer,
    auth: AuthReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
    compose;

export const store = createStore(
    rootReducers,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
