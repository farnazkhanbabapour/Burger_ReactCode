import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import "./SideDrawer.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) =>{
    let attachedClasses=null;

    if(props.open){
        attachedClasses="SideDrawer Open";
    }else {
        attachedClasses="SideDrawer Close";

    }

    return(
        <Wrapper>
            <div className="d-block d-sm-none" >
                <Backdrop show = {props.show} clicked = {props.sideDrawerClosed}/>   
                <div  className={attachedClasses}>
                    <div style={{height:"11%" , marginLeft:"auto" , marginRight:"auto"}}>
                        <Logo  />
                    </div>
                <nav>
                    <NavigationItems /> 
                </nav>
                </div>
            </div>
    
    </Wrapper>
    )
}

export default sideDrawer;