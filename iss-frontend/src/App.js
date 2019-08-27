import React, { useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar';
import DevLogin from './components/DevLogin';
import DevSignup from './components/DevSignup';
// import InventoryList from './components/InventoryList';

import './App.css';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm.js';
import InventoryList from './components/inventoryList';
import EditForm from './components/EditForm';

import Login from './components/Login';

function App() {

  const [inventoryArray, setInventoryArray] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory')
      .then(res => {
        console.log(res)
        setInventoryArray(res.data)
      }) 
      .catch(err => console.log(err)) 
  }, []);

  const addItem = (item) => {
    console.log('you have added an inventory item', item);
    axiosWithAuth().post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory', item)
      .then(res => {
        console.log(res.data.userInventory);
        setInventoryArray([
          ...res.data.userInventory
        ])
      })
      .catch(error => {
        console.log('There was an error', error)
      })
  };

  const editItem = (item) => {
    console.log(item);
  }

  return (
    // <Route>
    <div className="App">
      <NavBar />
      <Route path='/add_item' render={props => {
        return localStorage.getItem('token') ? (
              <AddItemForm {...props} addItem={addItem} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />

      
      <Route exact path='/' render={props => {
        return localStorage.getItem('token') ? (
              <InventoryList {...props} inventoryArray={inventoryArray} />
          ) : (
              <Redirect to='/login' /> 
          )
      }} />
      <Route path='/login' component={DevLogin} />
      <Route path='/signup' component={DevSignup} />
      <Route path='/edit-item/:id' render={props => {
        const targetInventory = inventoryArray.find(inventory => inventory.id.toString() === props.match.params.id)
        return <EditForm {...props} editItem={editItem} initialCard={targetInventory} />
      }} />

    
      {/* <Route
        exact
        path="/add_item"
        render={props => <AddItemForm {...props} addItem={addItem} />}
      /> */}

      {/* <InventoryList /> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;


