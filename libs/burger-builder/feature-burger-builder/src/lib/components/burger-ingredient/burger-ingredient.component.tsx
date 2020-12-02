import React from 'react';
import {
    Bacon,
    BreadBottom,
    BreadTop,
    Cheese,
    Meat,
    Salad,
} from './burger-ingredient.style';

export const BurgerIngredientComponent = (props) => {
    switch (props.type) {
        case 'bread-bottom': {
            return <BreadBottom />;
        }
        case 'bread-top': {
            return <BreadTop />;
        }
        case 'meat': {
            return <Meat />;
        }
        case 'cheese': {
            return <Cheese />;
        }
        case 'bacon': {
            return <Bacon />;
        }
        case 'salad': {
            return <Salad />;
        }
    }
};
