import React, { useState, useEffect} from 'react';
import './inventoryList.scss';
import {connect} from 'react-redux';

import {deleteItem} from '../Actions';
import { Button } from 'semantic-ui-react';

const InventoryCard = props => {

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
                    <Button className='delete-btn' inverted color='red' onClick={() => deleteClickHandler(item)}>
                      Delete Item
                    </Button>
                    <Button className='edit-btn' inverted color='green' onClick={() => editClickHandler(item)}>
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

// const InventoryCard = props => {

//     const editClickHandler = item => {
//       console.log('editing item', item) 
//       props.history.push(`/edit-item/${item.id}`)
//     }

//     const deleteClickHandler = item => {
//       props.deleteItem(item) 
//     }

//     return (
//         <div>
//           <div className="page">
//             {props.inventory.map(item => {
//               return (
//                 <div className="card" key={item.id}>
//                   <h3 className="name">{item.item_name}</h3>
//                   <h4 className="quantity">
//                     <p className="title">
//                         <h3>
//                       <strong>Items inventory: </strong>
//                       </h3>
//                     </p>{" "}
//                     {item.inventoryItem}
//                   </h4>
//                   <h4 className="unit">
//                     <p className="U-title">
//                         <h3>
//                       <strong>Weight: </strong>
//                       </h3>
//                     </p>
//                     {item.quantity} {item.weightUnit}
//                   </h4>
//                   { (Number(item.quantity) === 0) ? (
//                     <h4 className="notification">
//                       <p className="C-title">
//                           <h3>
//                         <strong>Restock</strong>
//                         </h3>
//                       </p>
//                   </h4> ) : null
//                   }
//                   <div>
//                   </div>
//                   <button className='delete-btn' onClick={() => deleteClickHandler(item)}>Delete Item</button>
//                   <button className='edit-btn' onClick={() => editClickHandler(item)}>Edit Item</button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       );

//     }

const mapStateToProps = state => ({
  inventory: state.inventory
})

export default connect(
  mapStateToProps,
  {deleteItem}
)(InventoryCard)
