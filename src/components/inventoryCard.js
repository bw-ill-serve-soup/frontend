import React, { useState, useEffect} from 'react';
import './inventoryList.scss';
// import Grid from '@material-ui/core/Grid';

const InventoryCard = props => {

    const [inventory, setInventory] = useState([])

    const editClickHandler = item => {
      console.log('editing item', item) 
      props.history.push(`/edit-item/${item.id}`)
    }

    const deleteClickHandler = item => {
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
                  { (Number(item.quantity) === 0) ? (
                    <h4 className="notification">
                      <div className="C-title">
                          <h3>
                        <strong>Restock</strong>
                        </h3>
                      </div>
                  </h4> ) : null
                  }
                  <div>
                  </div>
                  {/* <div
                    onClick={event => props.plus(item.id, event)}
                    className="countButtons"
                  >
                    +
                  </div>
                  <div
                    onClick={event => props.minus(item.id, event)}
                    className="countButtons"
                  >
                    -
                  </div> */}
                  <button className='delete-btn' onClick={() => deleteClickHandler(item)}>Delete Item</button>
                  <button className='edit-btn' onClick={() => editClickHandler(item)}>Edit Item</button>
                </div>
              );
            })}
          </div>
        </div>
      );

    }
export default InventoryCard;