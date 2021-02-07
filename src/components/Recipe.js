import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipeBox}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.line}></div>
            <div className={style.grid}>
                <ul className={style.ingredient}>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <img className={style.img} src={image} alt=""/>
            </div>
        </div>
    );
};


export default Recipe;