import React, { useState, useEffect } from 'react';
import './AddItemForm.scss';
import { Form, Button, Popup } from 'semantic-ui-react';



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
      <div className="addItem-container">
        <h2 className="headline">Add an item to your inventory</h2>

        <div className="form-container">
          <div className="form-wrapper">
            <Form onSubmit={handleSubmit}>
            
              <Form.Input
                required
                label="Item name"
                placeholder="ex. Banana"
                value={item.inventoryItem}
                name="inventoryItem"
                type="text"
                onChange={handleChange}
              />
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Item weight"
                  placeholder="ex. 3 lbs."
                  value={item.weightUnit}
                  name="weightUnit"
                  type="text"
                  onChange={handleChange}
                />
                <Form.Input
                  required
                  fluid
                  label="Quantity"
                  placeholder="ex. 5"
                  value={item.quantity}
                  name="quantity"
                  type="number"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="button-wrapper">
                
                
                <Button className="sub-button" type="submit">
                  Add new item
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default AddItemForm;

