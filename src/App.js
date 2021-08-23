import React from 'react';
import './App.css';
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
// components
import Header from "./components/Header"

const App = () => (
  <Router>
    <Header />
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
      <Route path="/products">
        <Products />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
