import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import InventoryForm from './components/InventoryForm';
import Login from './components/Login';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/add-form'/>
      <Route exact path='/' />
      <Route path='/login' component={Login} />
      <Route path='/signup' />
    </div>
  );
}

export default App;
