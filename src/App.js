import React from 'react';

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// pages
import About from './pages/About'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
