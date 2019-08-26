import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from './Auth/axiosWithAuth.js';

import AddItemForm from './components/AddItemForm.js';

function App() {
  

  // State and callbacks for the AddItemForm

  

  const addItem = (item) => {
    console.log('you have added an inventory item', item);
    axiosWithAuth().post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory')
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log('There was an error', error))
  };
  
  return (
    <div className="App">

      <Link to="/add_item">Add an item</Link>
      <Route
        exact
        path="/add_item"
        render={props => <AddItemForm {...props} addItem={addItem} />}
      />

    </div>
  );
}

export default App;
