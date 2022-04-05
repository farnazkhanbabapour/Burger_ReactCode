import React from "react"; 
import "./Logo.css";

import burgerLogo from "../../containers/Images/burger-logo.png";



const logo = (props) => {
    return(
        <div className="Logo">
        <img src={burgerLogo} /> 
        </div>
    )
}

export default logo;