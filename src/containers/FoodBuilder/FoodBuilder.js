import React, { useEffect, useState } from "react";
import Wrapper from "../../hoc/Wrapper";

import Food from "../../components/Food/Food";
import FoodControl from "../../components/Food/FoodControls/FoodControl/FoodControl";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import OrderSummery from "../../components/OrderSummery/OrderSummery";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

import {useNavigate} from 'react-router-dom';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,

}



class FoodBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients:{
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0,
            },
            purchasable : false,
            totalPreice : 0,
            loading : false,
           

        }
    }
  
    


    purchaseHandle = () => {
        this.setState({purchasable : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasable : false});
    }

    purchaseContinue = () => {
        alert("Continue");
    }

    purchaseChekout = () => {
        // this.setState({loading : true});
        // const order ={
        //     ingredients: this.state.ingredients,
        //     totalPreice: this.state.totalPreice,
        //     customer : {
        //         name : "Farnaz Khanbabapour",
        //         addresse : "Molwitzstraße 4"
        //     },
        //     Email : "Farnaz.kh6@gmail.com"
        // }

        // axios.post("posts",order)
        // .then(Response =>  {
        //     console.log (Response)
        //      this.setState({loading: false})
        // })
        // .catch(error => {
        //     console.log(error)
        //     this.setState({loading : false})
        // })

        // const navigate = useNavigate();
        // this.props.navigate('/checkout');

        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push("price =" + this.state.totalPreice )
        
        const queryString = queryParams.join("&")
        
      
         
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
         }
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPreice;
        const newPrice = INGREDIENT_PRICES[type];
        const priceAddition = oldPrice + newPrice;

        this.setState({totalPreice: priceAddition , ingredients : updatedIngredients});
        this.updatePurchasState(updatedIngredients);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0) {
            return ;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPreice;
        const newPrice = INGREDIENT_PRICES[type];
        const priceRemovetion = oldPrice - newPrice;

        this.setState({ingredients : updatedIngredients , totalPreice: priceRemovetion})

    }

    componentDidMount() {
        axios.get("posts")
        .then(response => {
            // this.setState({ingredients: response.data});
        })
    }

    render() {
        
        const  disabledInfo = {
            ...this.state.ingredients
        }

        for ( let key in  disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummery = null;

        orderSummery = <OrderSummery ingredients = {this.state.ingredients}
                            price = {this.state.totalPreice}
                            purchaseContinue ={this.purchaseContinue}
                            // purchaseChekout = {}
                        />
        if (this.state.loading) {
            orderSummery = <Spinner />
        }
       
      
        
    
        return(
            <Wrapper>
                <Modal show = {this.state.purchasable} modalClosed= {this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                <Food ingredients={this.state.ingredients} /> 
                <FoodControl 
                    addIngredient ={this.addIngredient} 
                    removeIngredient={this.removeIngredient}
                    price = {this.state.totalPreice}
                    disabled = {disabledInfo}
                    ordred = {this.purchaseHandle}
                />
            </Wrapper>

        )

    }
}



export default withErrorHandler(FoodBuilder, axios);