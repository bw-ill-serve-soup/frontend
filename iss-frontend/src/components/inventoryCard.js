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
                  <strong>Items inventory </strong>
                </p>{" "}
                {item.quantity}
              </h4>
              <h4 className="unit">
                <p className="U-title">
                  <strong>Shock: </strong>
                </p>
                {item.weightUnit}
              </h4>
              <h4 className="category">
                <p className="C-title">
                  <strong>Category: </strong>
                </p>
                {item.inventoryItem}
              </h4>
              <div>
              </div>
              <div
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

    }
export default InventoryCard;
