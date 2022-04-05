import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import "./Toolbar.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";


const toolbar = (props) => {
    return (
        <Wrapper>
            <header className="Toolbar">
            <nav className="DesktopOnly">
                        <NavigationItems />
                </nav>
                <div className="DesktopOnly LogoContainer">
                    <Logo  />
                </div>
                <DrawerToggle className="MobileOnly " clicked={props.drawerToggleclicked} />  

            </header>
        </Wrapper>
    )

}  




export default toolbar;