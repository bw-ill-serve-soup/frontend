import React, { useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import DevLogin from './components/DevLogin';
import DevSignup from './components/DevSignup';
// import InventoryList from './components/InventoryList';

import './App.css';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm/AddItemForm.js';
import InventoryList from './components/inventoryList';


function App() {
  

  // State and callbacks for the AddItemForm

  const [addMessage, setAddMessage] = useState('message-hide');

  const messageReset = () => {
    setAddMessage('message-hide');
  }

  const addItem = (item) => {
    console.log('you have added an inventory item', item);
    axiosWithAuth().post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory', item)
      .then(res => {
        console.log(res);
        // need to update state
        
        setAddMessage('message-display');
        setTimeout(messageReset, 3000);
        
      })
      .catch(error => {
        console.log('There was an error', error)
        
        
        

      })
  };
  return (
    // <Route>
    <div className="App">
      <NavBar />
      <Route path='/add_item' render={props => {
        return localStorage.getItem('token') ? (
              <AddItemForm {...props} addItem={addItem} messageStatus={addMessage}/>
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
      <Route path='/login' component={DevLogin} />
      <Route path='/signup' component={DevSignup} />

  

      {/* <InventoryList /> */}
    </div>
  );
}

export default App;


