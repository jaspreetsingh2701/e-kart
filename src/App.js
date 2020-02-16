import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeContainer from './app/home/HomeContainer';
import CartContainer from './app/cart/CartContainer';

function App() {
  return (
    <Router basename="/e-kart">
      <Route exact path='/' component={HomeContainer} />
      <Route path='/checkout' component={CartContainer} />
    </Router>
  );
}

export default App;
