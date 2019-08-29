import React, { useState, useEffect } from 'react';
import './EditForm.scss';
import { Form, Button, Message } from 'semantic-ui-react';



const EditForm = props => {
    // what will be passed down as 'props' from App.js?
    // addItem function -> post request to backend
    // console.log(props.inventoryArray.find(inventory => inventory.id === Number(props.match.params.id)))

    const { editItem, initialCard, messageStatus } = props;
   
    const [item, setItem] = useState(initialCard)
    
    const handleChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log('this works');
        editItem(item);
        setItem({quantity: '', weightUnit: '', inventoryItem: ''});
        props.history.push('/');
    }

    return (
      <div className="addItem-container">
          {console.log(messageStatus)}
        <h2 className="headline">Edit Inventory Item</h2>

        <div className="form-container">
          <div className="form-wrapper">
            <Form onSubmit={handleSubmit} className='edit-form'>
            
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
                  Update item
                </Button>
              </div>
              <div className='message-wrapper'>
                <div className={messageStatus}>
                  <Message
                    positive
                    header='Success'
                    content='Item has been updated'
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default EditForm;