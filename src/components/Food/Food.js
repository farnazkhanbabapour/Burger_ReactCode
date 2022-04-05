import { object } from "prop-types";
import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Food.css";

import FoodIngredients from "./FoodIngredient/FoodIngredients";


const Food = (props) => {
   
    let transformIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i) => {
            return <FoodIngredients key={igkey + i} type={igkey} />
        })
   }).reduce((arr , el) =>{
       return arr.concat(el)

   }, []);

   if(transformIngredients.length === 0) {
    transformIngredients = <p className="choose">please choose</p>
   }
//    console.log(transformIngredients);
   return(
        <Wrapper>
            <div className="Burger">
                <FoodIngredients type="bread-top" />
                {transformIngredients}
                <FoodIngredients  type="bread-bottom" /> 
            </div>

        </Wrapper>
   )


}

export default Food;