import React, { useState, useEffect} from 'react';




const InventoryCard = props => {

    const [inventory, setInventory] = useState([])




return (
    <div>
      <div className="page">
        {props.card.map(item => {
          return (
            <div className="card" key={item.id}>
              <h3 className="name">{item.item_name}</h3>
              <h4 className="quantity">
                <p className="title">
                    <h3>
                  <strong>Items inventory: </strong>
                  </h3>
                </p>{" "}
                {item.inventoryItem}
              </h4>
              <h4 className="unit">
                <p className="U-title">
                    <h3>
                  <strong>Weight: </strong>
                  </h3>
                </p>
                {item.weightUnit}
              </h4>
              <h4 className="category">
                <p className="C-title">
                    <h3>
                  <strong>Category: </strong>
                  </h3>
                </p>
                {item.quantity}
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
              <button className='edit-btn' onClick={() => props.editItem(item)}>Edit Item</button>
            </div>
          );
        })}
      </div>
    </div>
  );

    }
export default InventoryCard;
