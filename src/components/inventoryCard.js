import React, { useState, useEffect} from 'react';
import './inventoryList.scss';
import { Button, Transition, Divider } from 'semantic-ui-react';
// import Grid from '@material-ui/core/Grid';

const InventoryCard = props => {

    const [inventory, setInventory] = useState([])

    const [visible, setVisible] = useState(true)

    const toggleVisibility = () => {
      setVisible(!visible)
    }

    const editClickHandler = item => {
      console.log('editing item', item) 
      props.history.push(`/edit-item/${item.id}`)
    }

    const deleteClickHandler = item => {
      toggleVisibility();
      props.deleteItem(item) 
    }

    return (
        <div>
          <div className="page">
            {props.card.map(item => {
              return (
                <div className="card" key={item.id}>
                  <h3 className="name">{item.item_name}</h3>
                  <h4 className="quantity">
                    <div className="title">
                        <h3>
                      <strong>Items inventory: </strong>
                      </h3>
                    </div>{" "}
                    {item.inventoryItem}
                  </h4>
                  <h4 className="unit">
                    <div className="U-title">
                        <h3>
                      <strong>Quantity: </strong>
                      </h3>
                    </div>
                    {item.quantity} {item.weightUnit}
                  </h4>
                  {(Number(item.quantity) === 0) ? (
                    <h3 className="notification">
                      <div className="C-title">
                        <h3 className='restock'>
                          <strong>Restock</strong>
                        </h3>
                      </div>
                  </h3> ) : (
                    <h3 className="notification">
                      <div className="C-title">
                        <h3 className='stock'>
                          <strong>Stocked</strong>
                        </h3>
                      </div>
                    </h3>
                  )
                  }
                  <div>
                  </div>
                  <div className='btn-container'>
                      <Button className='delete-btn' basic color='red' onClick={() => deleteClickHandler(item)}>
                        
                        
                          Delete Item
                        
                      </Button>
                      <Button className='edit-btn' basic color='green' onClick={() => editClickHandler(item)}>
                        Edit Item
                      </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    }
export default InventoryCard;
