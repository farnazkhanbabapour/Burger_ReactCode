import React from "react";
import "./NavigationItems.css";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItems = (props) => {
    return(
        <ul className="NavigationItems">
            <NavigationItem link="/" >Order</NavigationItem>
            <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        </ul> 

    )


}

export default navigationItems;