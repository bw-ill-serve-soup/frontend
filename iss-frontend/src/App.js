import React, {useState} from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar';
import InventoryForm from './components/InventoryForm';
import Login from './components/Login';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/add-form' render={props => {
        return localStorage.getItem('token') ? (
              <InventoryForm {...props} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />
      <Route exact path='/' render={props => {
        return localStorage.getItem('token') ? (
              <InventoryList {...props} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />
      <Route path='/login' component={Login} />
      <Route path='/signup' />
    </div>
  );
}

export default App;
