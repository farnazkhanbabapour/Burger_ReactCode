import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "../../axios-orders";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent , axios) =>{
    return class extends Component {
        state = {
            error : null,
        }
       
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        ErrorConfirmHandler = () => {
            this.setState({error: null})
        }
        render () {
            return (
                <Wrapper>
                    <Modal show = {this.state.error} modalClosed = {this.ErrorConfirmHandler} >
                       <div  style={{color:"red" , fontSize:"bold"}}> 
                            {this.state.error ? this.state.error.message  : null }
                        </div>
                    </Modal>
                    <WrappedComponent {...this.props} />


                </Wrapper>
            )
        }

    }

}

export default withErrorHandler;