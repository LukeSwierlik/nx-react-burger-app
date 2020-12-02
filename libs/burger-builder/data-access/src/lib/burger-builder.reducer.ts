import {
    AddIngredient,
    BurgerBuilderActions,
    BurgerBuilderActionTypes,
    BurgerBuilderState,
    Ingredient,
    Ingredients,
    LoadIngredientsSuccess,
    RemoveIngredient,
} from '@nx-react-burger-app/shared/interfaces';
import produce from 'immer';

const initialState: BurgerBuilderState = {
    building: false,
    error: null,
    ingredients: {
        [Ingredients.BACON]: 0,
        [Ingredients.CHEESE]: 0,
        [Ingredients.MEAT]: 0,
        [Ingredients.SALAD]: 0,
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const addIngredient = (
    draft: BurgerBuilderState,
    { ingredientName }: AddIngredient
) => {
    const updateIngredient: Ingredient = {
        ...draft.ingredients,
        [ingredientName]: draft.ingredients[ingredientName] + 1,
    };

    return {
        ...draft,
        ingredients: updateIngredient,
        totalPrice: draft.totalPrice + INGREDIENT_PRICES[ingredientName],
        building: true,
    };
};

const removeIngredient = (
    draft: BurgerBuilderState,
    { ingredientName }: RemoveIngredient
) => {
    const updateIngredient: Ingredient = {
        ...draft.ingredients,
        [ingredientName]: draft.ingredients[ingredientName] - 1,
    };

    return {
        ...draft,
        ingredients: updateIngredient,
        totalPrice: draft.totalPrice + INGREDIENT_PRICES[ingredientName],
        building: true,
    };
};

const loadIngredientsSuccess = (
    draft: BurgerBuilderState,
    { ingredients }: LoadIngredientsSuccess
) => {
    if (!ingredients) {
        ingredients = initialState.ingredients;
    }

    return {
        ...draft,
        ingredients,
    };
};

export const BurgerBuilderReducer = (
    state = initialState,
    action: BurgerBuilderActionTypes
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case BurgerBuilderActions.ADD_INGREDIENT: {
                return addIngredient(draft, action);
            }
            case BurgerBuilderActions.REMOVE_INGREDIENT: {
                return removeIngredient(draft, action);
            }
            case BurgerBuilderActions.LOAD_INGREDIENTS_SUCCESS: {
                return loadIngredientsSuccess(draft, action);
            }
            default: {
                return state;
            }
        }
    });
};
