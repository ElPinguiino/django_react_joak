import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import PlaceOrder from './pages/placeorder';
import PreOrder from './pages/preorder'
import PlaceOrderCart from './components/PlaceOrder/Cart';
// import AdminComponent from './pages/admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/placeorder" component={PlaceOrder} exact />
        <Route path="/cart" component={PlaceOrderCart} exact />
        <Route path="/preorder" component={PreOrder} exact />
        {/* <Route path="/admin" component={AdminComponent} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
