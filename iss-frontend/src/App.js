import React, { useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import DevLogin from './components/DevLogin';
import DevSignup from './components/DevSignup';
// import InventoryList from './components/InventoryList';

import './App.css';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm/AddItemForm.js';
import InventoryList from './components/inventoryList';
import EditForm from './components/EditForm';
import {getInventory} from './Actions';

function App(props) {

  const [inventoryArray, setInventoryArray] = useState([]);

  useEffect(() => {
    props.getInventory()
  }, []);
  // State to display 'Success Message' on the AddItem form when post request is successful

  const [addMessage, setAddMessage] = useState('message-hide');

  // Function to use in successful post request to hide 'Success' message after 3 seconds

  const messageReset = () => {
    setAddMessage('message-hide');
  }

        
  return (
    // <Route>
    <div className="App">
      <NavBar />
      <Route path='/add_item' render={props => {
        return localStorage.getItem('token') ? (
              <AddItemForm {...props} messageStatus={addMessage}/>
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
      <Route path='/edit-item/:id' render={props => {
        return <EditForm {...props} />
      }} />
    </div>
  );
}

const mapStateToProps = state => ({
  inventory: state.inventory
})

export default connect(
  mapStateToProps, 
  {getInventory}
)(App);


