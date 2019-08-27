import React, { useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
// import InventoryList from './components/InventoryList';

import './App.css';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm.js';
import InventoryList from './components/inventoryList';


function App() {
  

  // State and callbacks for the AddItemForm

  

  const addItem = (item) => {
    console.log('you have added an inventory item', item);
    axiosWithAuth().post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory', item)
      .then(res => {
        console.log(res);
        // need to update state
        alert(`You have successfully added ${item.inventoryItem} to your inventory`)
      })
      .catch(error => {
        console.log('There was an error', error)
        
        

      })
  };
  
  return (
    // <Route>
    <div className="App">
      <NavBar />
      {/*<Route path='/add_item' render={props => {
        return localStorage.getItem('token') ? (
              <AddItemForm {...props} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />*/}
      <Route
        exact
        path="/add_item"
        render={props => <AddItemForm {...props} addItem={addItem} />}
      />

      
      <Route exact path='/' render={props => {
        return localStorage.getItem('token') ? (
              <InventoryList {...props} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />
      <Route path='/login' component={Login} />
      <Route path='/signup' />

    
      {/* <Route
        exact
        path="/add_item"
        render={props => <AddItemForm {...props} addItem={addItem} />}
      /> */}

      {/* <InventoryList /> */}
    </div>
  //  </Route>
  );
}

export default App;


