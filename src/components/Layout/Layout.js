import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Layout.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import Modal from "../UI/Modal/Modal";


class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state={
        showSideDrawer: true,
        }
    }


    // sideDrawerToggleHandler = () =>{
    //    this.setState({showSideDrawer: false});
    // }

    sideDrawerToggleHandler= () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        }   );
    }

    render() {
        return(
            <Wrapper> 
                 <Toolbar drawerToggleclicked={this.sideDrawerToggleHandler} />
                 
                    <SideDrawer sideDrawerClosed = {this.sideDrawerToggleHandler} show={this.state.showSideDrawer} open={this.state.showSideDrawer}/>
                 

                <div className="Content">
                    {this.props.children} 
                </div>
            </Wrapper>
        )
    }
  
}
export default Layout;