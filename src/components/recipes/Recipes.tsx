import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps, IRecipeTypeProps} from "../recipe/Recipe";



const Recipes: FC = () => {


    const [recipes,setRecipes]= useState<IRecipeProps[]>([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                setRecipes(recipes)
            });
    },[])



    return (
        <div>
            {
            recipes
                .map(({id,name, cuisine, instructions,mealType}: IRecipeProps) => (
                    <Recipe key={id}
                    id={id}
                    name={name}
                    cuisine={cuisine}
                    mealType={mealType}
                    instructions={instructions}/>))
            }
        </div>
    );
};

export default Recipes;