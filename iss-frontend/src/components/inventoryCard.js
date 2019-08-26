import React, { useState, useEffect} from 'react';

cosnt inventoryCard = props => {

    const [inventory, useInventory] = useState([])

    useEffect(() => {
        axios
        .post('')
        .then(res => {
        })
        .catch(err => {
            console.log("Error!", err);
       
        })
    })
}