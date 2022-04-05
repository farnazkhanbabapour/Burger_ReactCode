import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";

import CheckoutSummery from "../../components/Order/CheckoutSummery/CheckoutSummery";
import ContactData from "../../containers/Checkout/ContactData/ContactData";

import {useLocation , Route , Routes ,  useNavigate} from "react-router-dom";



const Checkout = (props) => {

    const navigate = useNavigate();
   

    const query = new URLSearchParams(useLocation().search)
    const ingredients={};
    
    
    
    for(let params of query.entries()) {
       
        //params = ["salat", "1"]
        ingredients[params[0]] = +params[1]
   
  
    }

    
    return(
        <Wrapper>
            <CheckoutSummery ingredients={ingredients}   />
            <Routes>
                <Route path="/checkout/contact-data"
                    element={<ContactData ingredients={ingredients}  />}
                      />
            </Routes> 
        </Wrapper>
    )
  
}

export default Checkout;

