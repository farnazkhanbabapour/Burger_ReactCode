import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./OrderSummery.css";

import Button from "../UI/Button/Button";
import {useNavigate , } from 'react-router-dom';


const OrderSummery = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
    .map(igkey => (
         <li> {igkey} : {props.ingredients[igkey]} </li>
    ))
    
    const navigate =  useNavigate();

    const queryParams = [];
    for(let i in props.ingredients) {
        queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(props.ingredients[i]) )
    }
      
    const queryString = queryParams.join("&")

    return(
       <Wrapper> 
            <div>
            <h4 >Your Order:</h4>
                <ul style={{listStyleType: "none"}}  >
                    {ingredientsSummery}
                </ul>   
            </div>  
            <p style={{fontWeight : "Bold"}}>Total Price : {props.price.toFixed(2)}</p>
            <hr></hr>
            <Button btnType = {"btn-success m-3"} clicked={props.purchaseContinue}>Order</Button> 
            <Button btnType = {"btn-danger m-3"} clicked={()=> navigate({
                pathname:'/checkout',
                search: "?" + queryString
            })}>Pay</Button> 
            
         
        </Wrapper> 
    )
}

export default OrderSummery;