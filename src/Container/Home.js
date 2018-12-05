import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from '../Components/Login';
import Checkout from '../Components/Checkout';

import BurgerBuilder from '../Container/BurgerBuilder';
class Home extends Component {
  render() {
    return (
      <div >
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/burgerbuilder' exact component={BurgerBuilder} />
        <Route path='/checkout' exact component={Checkout} />

      </div>
    );
  }
}

export default Home;
