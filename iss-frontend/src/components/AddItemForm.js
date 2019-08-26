import React, { useState, useEffect } from 'react';
import './AddItemForm.css';



const AddItemForm = props => {
    // what will be passed down as 'props' from App.js?
    // addItem function -> post request to backend

    const { addItem } = props;


    // State
    
    const initialState = {quantity: '', weightUnit: '', inventoryItem: ''};
    
    const [item, setItem] = useState(initialState);

    // Temporary, this will probably include an 'addItem' function from App.js
    
    const handleChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    
    
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log('this works');
        addItem(item);
        setItem(initialState);
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <h2>Add a new inventory item</h2>
          <div className="form-inputs">
            <div className="input-field item-name">
              <input
                placeholder="New item"
                value={item.inventoryItem}
                name="inventoryItem"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="input-field weight">
              <input
                placeholder="Weight"
                value={item.weightUnit}
                name="weightUnit"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="input-field quantity">
              <input
                placeholder="Quantity"
                value={item.quantity}
                name="quantity"
                type="number"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Add Inventory Item</button>
        </div>
      </form>
    );
}

export default AddItemForm;

