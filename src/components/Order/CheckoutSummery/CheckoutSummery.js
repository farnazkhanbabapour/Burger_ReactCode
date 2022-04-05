import React from "react";
import Wrapper from "../../../hoc/Wrapper";

import Button from "../../UI/Button/Button";
import Food from "../../Food/Food";
import ContactData from "../../../containers/Checkout/ContactData/ContactData";

import {useNavigate , createSearchParams , useMatch } from "react-router-dom";


const CheckoutSummery = (props) =>{
    const navigate =  useNavigate();

    
    const queryParams = [];
    for(let i in props.ingredients) {
        queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(props.ingredients[i]))
    }
    

    const queryString = queryParams.join("&")
    
    
    return(
        <Wrapper>
               <h4 >Your Order</h4>
               <hr></hr>
                <Food ingredients={props.ingredients} /> 
               <div>
                    <Button btnType = {"btn-success m-3"} clicked={()=> navigate({
                        pathname:'checkout/contact-data',
                        search: "?" + queryString
            })} >Continue</Button> 
                    <Button btnType = {"btn-danger m-3"} clicked={()=> navigate('/')}>Cancel</Button>  
                   
                </div>
        </Wrapper>
    )


}

export default CheckoutSummery;

