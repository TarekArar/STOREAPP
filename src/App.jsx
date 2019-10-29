import React from 'react';
import './App.css';
/* bootstrap importation */ 
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route , Switch  } from 'react-router-dom'
/* Components Importation */ 
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal'

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route exact component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
  );
}

export default App;
