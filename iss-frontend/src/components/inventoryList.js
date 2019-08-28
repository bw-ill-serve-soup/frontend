import React, { useState, useEffect} from 'react';
import InventoryCard from './inventoryCard';



const InventoryList = props => {
  const [inventory, setinventory] = useState([]);
  // console.log(props);
  const {history, inventoryArray, deleteItem} = props;

  useEffect(() => {
    setinventory(inventoryArray)
  }, [inventoryArray]);


  return (
    <div>
      {/* <InventoryCard card={inventory} history={history} deleteItem={deleteItem} />} */}
      <InventoryCard history={history} deleteItem={deleteItem} />
    </div>
  )
}

export default InventoryList;


  
