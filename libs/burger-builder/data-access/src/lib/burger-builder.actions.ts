import {
    AddIngredient,
    BurgerBuilderActions,
    Ingredient,
    Ingredients,
    LoadIngredients,
    LoadIngredientsFailure,
    LoadIngredientsSuccess,
    RemoveIngredient,
} from '@nx-react-burger-app/shared/interfaces';

export const addIngredient = (ingredientName: Ingredients): AddIngredient => {
    return {
        type: BurgerBuilderActions.ADD_INGREDIENT,
        ingredientName,
    };
};

export const removeIngredient = (
    ingredientName: Ingredients
): RemoveIngredient => {
    return {
        type: BurgerBuilderActions.REMOVE_INGREDIENT,
        ingredientName,
    };
};

export const loadIngredients = (): LoadIngredients => {
    return {
        type: BurgerBuilderActions.LOAD_INGREDIENTS,
    };
};

export const loadIngredientsSuccess = (
    ingredients: Ingredient
): LoadIngredientsSuccess => {
    return {
        type: BurgerBuilderActions.LOAD_INGREDIENTS_SUCCESS,
        ingredients,
    };
};

export const loadIngredientsFailure = (
    error: Error
): LoadIngredientsFailure => {
    return {
        type: BurgerBuilderActions.LOAD_INGREDIENTS_FAILURE,
        error,
    };
};
