import React, { useState, useEffect} from 'react';


const inventoryCard = props => {

    const [inventory, useInventory] = useState([])

    useEffect(() => {
        axios
        .post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory')
        .then(res => {
        setinventory(res.data);
        })
        .catch(err => {
            console.log("Error!", err);
       
        
    });
}, []);


return (
    <div>
        {props.card.map(item => {
            
        })}
    </div>
)





}



export default inventoryCard;
