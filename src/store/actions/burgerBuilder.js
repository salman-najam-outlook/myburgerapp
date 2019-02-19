import * as actionTypes from './actiontypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDITENTS,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDITENTS,
        ingredientName: name
    };
};

export const setingredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://my-burger-builder-appp.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setingredients(response.data));
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed());
        });
    };
};

