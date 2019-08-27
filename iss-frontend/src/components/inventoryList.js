import React, { useState, useEffect} from 'react';
import InventoryCard from './inventoryCard'
import axios from 'axios';



const mockArray = 
[{inventoryItem: 'Potatoes', weightUnit: '12 pounds', quantity: 5}, 
{inventoryItem: 'Canned soup', weightUnit: '20 pounds', quantity: 40}, 
{inventoryItem: 'Carrots', weightUnit: '20 pounds', quantity: 20}, 
{inventoryItem: 'Milk', weightUnit: '175 pounds', quantity: 20},
{inventoryItem: 'Salt', weightUnit: '13 pounds', quantity: 5}, 
{inventoryItem: 'Butter', weightUnit: '5 pounds', quantity: 10},
{inventoryItem: 'Jar Corn', weightUnit: '16 pounds', quantity: 32},
{inventoryItem: 'Wild Rice', weightUnit: '50 pounds', quantity: 10},
{inventoryItem: 'Flour', weightUnit: '100 pounds', quantity: 5},
{inventoryItem: 'Diced Tomatoes', weightUnit: '10 pounds', quantity: 12}]



const InventoryList = props => {
    const [inventory, setinventory] = useState([]);

useEffect(() => setinventory(mockArray), []);





// function minus() {
//     const id = props.match.params.id;
//     axios
//     .put(
//       `https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory${id}`
//     );
//   }

  function plus() {}
  return (
    <div>
      <InventoryCard card={inventory}  />
    </div>






//   )
// }
  )
}

export default InventoryList;

  
