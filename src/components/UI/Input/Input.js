import React from "react";
import "./Input.css";


const input = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case("input"):
        inputElement = <input className="input" {...props.elementConfig} defaultValue={props.value} onChange={props.changed} />
        break;
        case("textarea"):
        inputElement = <textarea className="textarea" {...props.elementConfig} onChange={props.changed} >{props.value}</textarea>
        break;
        case("select"):
        inputElement = (
            <select className="select" defaultValue={props.value} onChange={props.changed}>
                {props.elementConfig.Options.map(option =>(
                    <option key={option.value} defaultValue={option.value}>{option.label}</option>
                    )
                )}
            </select>
        )
        break;
    }
    return(
        <div>
           <label>{props.label}</label> 
           {inputElement}
        </div>
    )
}

export default input;