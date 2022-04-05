import React from "react";
import Wrapper from "../../../../hoc/Wrapper";
import "./FoodControl.css";

import FoodControls from "../FoodControls";

const controls =[
    {label:"Salad" , type:"salad"},
    {label:"Bacon" , type:"bacon"},
    {label:"Cheese" , type:"cheese"},
    {label:"Meat" , type:"meat"},
    
]

const foodControl = (props) => {
    return (
      <Wrapper>
          <div className="BuildControls">
              <p style={{fontWeight : "Bold"}}>Total Price : {props.price.toFixed(2)}</p>
            {controls.map((ctrl) => (
                <FoodControls
                    added = {() => {props.addIngredient(ctrl.type)}}
                    removed = {() => {props.removeIngredient(ctrl.type)}}
                    disabled = {props.disabled[ctrl.type]}
                    label = {ctrl.label} 
                    key = {ctrl.label}
                    />
                ))}
                <button className="OrderButton" onClick={props.ordred}>Order Now</button>
          </div>
          
          
          
      </Wrapper>
      )
    

   


}

export default foodControl;