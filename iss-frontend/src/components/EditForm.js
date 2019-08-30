import React, { useState, useEffect } from 'react';
import './AddItemForm/AddItemForm.scss';
import { Form, Button, Message, Dropdown } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {editItem} from '../Actions';


const EditForm = props => {
    // what will be passed down as 'props' from App.js?
    // addItem function -> post request to backend
    // console.log(props.inventoryArray.find(inventory => inventory.id === Number(props.match.params.id)))

    const { editItem, inventory } = props;

    console.log(inventory.find(item => item.id === Number(props.match.params.id)));
    const initialCard = inventory.find(item => item.id === Number(props.match.params.id))
   
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
                  label="Unit"
                  placeholder="ex. lbs."
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
              <div className='message-wrapper'>
                {/* <div className={messageStatus}>
                  <Message
                    positive
                    header='Success'
                    content='Item has been updated'
                  />
                </div> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
  inventory: state.inventory 
})

export default connect(
  mapStateToProps,
  {editItem}
)(EditForm)