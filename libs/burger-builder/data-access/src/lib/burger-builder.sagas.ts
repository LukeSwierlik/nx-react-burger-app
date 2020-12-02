import { BurgerBuilderActions } from '@nx-react-burger-app/shared/interfaces';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loadIngredientsFailure,
    loadIngredientsSuccess,
} from './burger-builder.actions';
import { loadIngredients } from './burger-builder.service';

export function* watchBurgerBuilder() {
    yield takeEvery(BurgerBuilderActions.LOAD_INGREDIENTS, loadIngredients$);
}

function* loadIngredients$() {
    try {
        const { data } = yield call(loadIngredients);
        yield put(loadIngredientsSuccess(data));
    } catch (error) {
        yield put(loadIngredientsFailure(error));
    }
}
