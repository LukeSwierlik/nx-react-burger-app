export interface BurgerBuilderState {
    ingredients: Ingredient;
    totalPrice: number;
    error: Error;
    building: boolean;
}

export type Ingredient = {
    [key in Ingredients]: number;
};

export enum Ingredients {
    SALAD = 'salad',
    CHEESE = 'cheese',
    MEAT = 'meat',
    BACON = 'bacon',
}

export enum BurgerBuilderActions {
    ADD_INGREDIENT = '[Burger Builder] Add Ingredient',
    REMOVE_INGREDIENT = '[Burger Builder] Remove Ingredient',
    LOAD_INGREDIENTS = '[Burger Builder] Load Ingredients',
    LOAD_INGREDIENTS_SUCCESS = '[Burger Builder] Load Ingredients Success',
    LOAD_INGREDIENTS_FAILURE = '[Burger Builder] Load Ingredients Failure',
}

export interface AddIngredient {
    type: typeof BurgerBuilderActions.ADD_INGREDIENT;
    ingredientName: Ingredients;
}

export interface RemoveIngredient {
    type: typeof BurgerBuilderActions.REMOVE_INGREDIENT;
    ingredientName: Ingredients;
}

export interface LoadIngredients {
    type: typeof BurgerBuilderActions.LOAD_INGREDIENTS;
}

export interface LoadIngredientsSuccess {
    type: typeof BurgerBuilderActions.LOAD_INGREDIENTS_SUCCESS;
    ingredients: Ingredient;
}

export interface LoadIngredientsFailure {
    type: typeof BurgerBuilderActions.LOAD_INGREDIENTS_FAILURE;
    error: Error;
}

export type BurgerBuilderActionTypes =
    | AddIngredient
    | RemoveIngredient
    | LoadIngredients
    | LoadIngredientsSuccess
    | LoadIngredientsFailure;
