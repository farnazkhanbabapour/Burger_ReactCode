import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import "./FoodControls.css";

const foodControls = (props) => {
    return(
        <Wrapper>
            <div className="BuildControl">
                <label className="Label">{props.label}</label>
                <button className="More" onClick = {props.added} > More </button>
                <button className="Less" disabled = {props.disabled} onClick={props.removed} > Less </button>
            </div>
        </Wrapper>
    )


}

export default foodControls;