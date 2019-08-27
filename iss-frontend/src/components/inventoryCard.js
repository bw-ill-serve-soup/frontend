import React, { useState, useEffect} from 'react';
import './inventoryList.scss';
// import Grid from '@material-ui/core/Grid';

const InventoryCard = props => {

    const [inventory, setInventory] = useState([])




return (
    <div>
       
       
      <div className="page">
      <h1 className="header">Inventory</h1>
        {props.card.map(item => {
          return (
  
            <div className="card" key={item.id}>
               
              <h3 className="name">{item.item_name}</h3>
              <h4 className="quantity">
                <p className="title">
                    <h3>
                  <span class="dot"></span>
                  <strong>Items inventory: </strong>
                  </h3>
                </p>{" "}
                <p>{item.inventoryItem}</p>
              </h4>
              <h4 className="unit">
                <p className="U-title">
                    <h3>
                  <strong>Weight: </strong>
                  </h3>
                </p>
               <p>{item.weightUnit}</p>
              </h4>
              <h4 className="category">
                <p className="C-title">
                    <h3>
                  <strong>Quantity: </strong>
                  </h3>
                </p>
                <p>{item.quantity}</p>
              </h4>
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
            </div>
           
          );
        })}
      </div>
    </div>
    
);

    }
export default InventoryCard;
