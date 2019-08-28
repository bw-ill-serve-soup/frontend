import React, { useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar';
import DevLogin from './components/DevLogin';
import DevSignup from './components/DevSignup';
// import InventoryList from './components/InventoryList';

import './App.css';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm/AddItemForm.js';
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
  // State to display 'Success Message' on the AddItem form when post request is successful

  const [addMessage, setAddMessage] = useState('message-hide');

  // Function to use in successful post request to hide 'Success' message after 3 seconds

  const messageReset = () => {
    setAddMessage('message-hide');
  }

  const addItem = (item) => {
    console.log('you have added an inventory item', item);
    axiosWithAuth().post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory', item)
      .then(res => {
        console.log(res.data.userInventory);
        setInventoryArray([
          ...res.data.userInventory
        ])
        console.log(res);
        // need to update state
        
        setAddMessage('message-display');
        setTimeout(messageReset, 3000);
        
      })
      .catch(error => {
        console.log('There was an error', error)
        
        
        

      })
  };
  
  const editItem = (item) => {
    console.log('item that is being edited', item);
    axiosWithAuth()
      .put(`https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory`, item)
      .then(res => {
        console.log(res)
        const mutateArray = [...inventoryArray]
        for (let i=0; i < inventoryArray.length; i++) {
          if (item.id === mutateArray[i].id) {
            mutateArray[i].quantity = item.quantity;
            mutateArray[i].weightUnit = item.weightUnit;
            mutateArray[i].inventoryItem = item.inventoryItem;
          }
        }
        setInventoryArray(mutateArray);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteItem = (item) => {
    console.log('item that is being deleted', item)
    const object = {id: item.id};
    
    axiosWithAuth()
      .delete(`https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory/${item.id}`)
      .then(res => {
        console.log(res)
        setInventoryArray([
          ...inventoryArray.filter(inventory => inventory.id !== item.id)
        ])
      })
      .catch(err => {
        console.log(err) 
      })
  }

        
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
              <InventoryList {...props} inventoryArray={inventoryArray} deleteItem={deleteItem} />
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

  

      {/* <InventoryList /> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;


