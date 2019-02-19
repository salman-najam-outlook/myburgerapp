import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import './Burger.css';
import {withRouter} from 'react-router-dom';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])] // [,]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = "Please start adding ingredients!";
        }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);