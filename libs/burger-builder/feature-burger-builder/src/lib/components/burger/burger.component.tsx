import { Ingredient } from '@nx-react-burger-app/shared/interfaces';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { BurgerIngredientComponent } from '../burger-ingredient/burger-ingredient.component';
import { BurgerContainer } from './burger.style';

interface BurgerProps {
    ingredients: Ingredient;
}

export const Burger: FunctionComponent<BurgerProps> = (
    props: PropsWithChildren<BurgerProps>
) => {
    let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(
        props.ingredients
    )
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return (
                    <BurgerIngredientComponent
                        type={igKey}
                        key={igKey + '_' + i}
                    />
                );
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <BurgerContainer>
            <BurgerIngredientComponent type={'bread-top'} />
            {transformedIngredients}
            <BurgerIngredientComponent type={'bread-bottom'} />
        </BurgerContainer>
    );
};
