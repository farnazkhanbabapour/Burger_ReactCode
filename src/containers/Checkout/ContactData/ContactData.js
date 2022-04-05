import React, { Component } from "react";
import "./ContactData.css";

import Button from "../../../components/UI/Button/Button" ;
import Input from "../../../components/UI/Input/Input";

import axios from "../../../axios-orders";
import { event } from "jquery";

class ContactData extends Component {
    state = {
        orderFOrm :{
            firstname :{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Your name..."
                },
                value:"",
                label:"Your name"
            },
            lastname :{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Your Address..."
                },
                value:"",
                label:"Your Address"
            },
            email :{
                elementType:"input",
                elementConfig:{
                    type:"email",
                    placeholder:"Your Email..."
                },
                value:"",
                label:"Your Email"
            },
            deliveryMethod : {
                elementType:"select",
                elementConfig:{
                    Options:[
                        {value:"UberEat", label:"UberEat"},
                        {value:"Liferando", label:"Liferando"}
                    ]
                },
                value:"",
                label:"DeliveryMethod"
            }
        }
    }

    clickedHandler = (event) =>{
        event.preventDefault();
        console.log(this.props.ingredients);
        const formData ={};
        for(let formElementIdentifier in this.state.orderFOrm) {
            formData[formElementIdentifier] = this.state.orderFOrm[formElementIdentifier].value
        }
   

        const order ={
            ingredients: this.props.ingredients,
            order: formData

        }
        axios.post("posts",order)
        .then(Response =>  {
            console.log (Response)
             this.setState({loading: false})
        })
        .catch(error => {
            console.log(error)
            this.setState({loading : false})
        })
    }
    inputHandler =(event, inputIdentifier) => {
       const updatedOrderForm ={
           ...this.state.orderFOrm
       }
       const updatedFormElement ={
           ...updatedOrderForm[inputIdentifier]
       }
       updatedFormElement.value = event.target.value;
       updatedOrderForm[inputIdentifier] = updatedFormElement;
       this.setState({orderFOrm: updatedOrderForm})
    }


    render() {
        const formElementArray =[];
        for(let key in this.state.orderFOrm){
            formElementArray.push({
                id: key,
                config: this.state.orderFOrm[key]
            })
        }

        return(
            <div>
                <h3>Contact Form</h3>
                <form action="/action_page.php" onSubmit={this.clickedHandler}>
                    {formElementArray.map(formElement =>(
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            label={formElement.config.label}
                            changed ={(event)=>this.inputHandler(event,formElement.id)}
                            
                        />
                    )
                        )}
                    <Button btnType = {"btn-success m-3"} clicked = {this.clickedHandler}>Final Pay</Button> 
                </form>

            </div>
        

        )
         }

}

export default ContactData;

