import { Ingredients, State } from '@nx-react-burger-app/shared/interfaces';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addIngredient,
    loadIngredients,
    removeIngredient,
} from '@nx-react-burger-app/burger-builder/data-access';
import { BuildControlsComponents } from './components/build-controls/build-controls.component';
import { Burger } from './components/burger/burger.component';

export const FeatureBurgerBuilder = () => {
    const { ingredients, totalPrice } = useSelector(
        (state: State) => state.burgerBuilder
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadIngredients());
    }, []);

    const addIngredientAction = (name: Ingredients): void => {
        dispatch(addIngredient(name));
    };

    const removeIngredientAction = (name: Ingredients): void => {
        dispatch(removeIngredient(name));
    };

    return (
        <>
            <Burger ingredients={ingredients} />

            <BuildControlsComponents
                ingredientAdded={addIngredientAction}
                ingredientRemoved={removeIngredientAction}
                price={totalPrice}
                isAuth={true}
                ordered={() => {}}
                purchasable={true}
            />
        </>
    );
};
