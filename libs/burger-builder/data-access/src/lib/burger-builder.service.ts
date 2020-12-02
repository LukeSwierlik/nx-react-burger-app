import axios from 'axios';

export const loadIngredients = () => {
    return axios.get(
        'https://react-burger-app-b0d49.firebaseio.com/ingredients.json'
    );
};
