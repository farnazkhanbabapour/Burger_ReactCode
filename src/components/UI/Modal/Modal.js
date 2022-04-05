import React from "react";
import "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper";

class Modal extends React.Component{
    componentDidUpdate(){
        console.log("[Modal Component] will Updated")
    }
    
    shouldComponentUpdate(nextprops, nextstate) {
        return (nextprops.show !== this.props.show || nextprops.children !== this.props.children);
    }

    render(){
        return (
            <Wrapper>
            <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
                <div className="Modal" 
                    style={{
                        transform : this.props.show ? "translateY(0)" : "translateY(-10)" ,
                        opacity : this.props.show ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </Wrapper>

        )
    }
}
export default Modal;