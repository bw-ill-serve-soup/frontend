import React, { useState, useEffect} from 'react';
import InventoryCard from './inventoryCard'
import {axiosWithAuth} from '../Auth/axiosWithAuth';

const mockArray = [
  {inventoryItem: 'potatoes', weightUnit: '12 pounds', quantity: 5}, 
  {inventoryItem: 'canned soup', weightUnit: '20 pounds', quantity: 40}, 
  {inventoryItem: 'carrots', weightUnit: '20 pounds', quantity: 20}, 
  {inventoryItem: 'Milk', weightUnit: '175 pounds', quantity: 20},
  {inventoryItem: 'Salt', weightUnit: '13 pounds', quantity: 5},
  {inventoryItem: 'butter', weightUnit: '5 pounds', quantity: 10},
  {inventoryItem: 'Jar Corn', weightUnit: '16 pounds', quantity: 32},
  {inventoryItem: 'Wild Rice', weightUnit: '50 pounds', quantity: 10},
  {inventoryItem: 'Green Bell Peppers', weightUnit: '5 pounds', quantity: 8},
  {inventoryItem: 'Flour', weightUnit: '100 pounds', quantity: 5},
  {inventoryItem: 'Diced Tomatoes', weightUnit: '10 pounds', quantity: 12}
]



const InventoryList = props => {
  const [inventory, setinventory] = useState([]);
  // console.log(props);
  const {history, inventoryArray, deleteItem} = props;

  useEffect(() => {
    setinventory([...inventoryArray])
  }, [inventoryArray]);


  return (
    <div>
      {inventory && <InventoryCard card={inventory} history={history} deleteItem={deleteItem} />}
    </div>
  )
}
export default InventoryList;

  
