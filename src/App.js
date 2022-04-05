import React  from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import Checkout from "./containers/Checkout/Checkout";
import ContactData from './containers/Checkout/ContactData/ContactData';
import Wrapper from './hoc/Wrapper';

import {Route, Routes} from "react-router-dom";

class App extends React.Component{
  render (){
    return (
        <Wrapper>
        <div className='container text-center'> 
          <Layout>
            <Routes>
              <Route path='/checkout/*' element={<Checkout />} />
              <Route path='/' exact element={<FoodBuilder />} />
              {/* <Route path='/contactData' element={<ContactData />} /> */}
            </Routes>
          </Layout>
        </div>
        </Wrapper>
   
      
    )
  }

}

export default App;
