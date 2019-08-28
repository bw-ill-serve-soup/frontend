import React, { useState, useEffect} from 'react';
import './inventoryList.scss';
import {connect} from 'react-redux';

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
            {props.inventory.map(item => {
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
                    {item.quantity} {item.weightUnit}
                  </h4>
                  { (Number(item.quantity) === 0) ? (
                    <h4 className="notification">
                      <p className="C-title">
                          <h3>
                        <strong>Restock</strong>
                        </h3>
                      </p>
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

const mapStateToProps = state => ({
  inventory: state.inventory
})

export default connect(
  mapStateToProps,
  {}
)(InventoryCard)
