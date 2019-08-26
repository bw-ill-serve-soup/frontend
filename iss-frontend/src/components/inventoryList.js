import React, { useState, useEffect} from React;
import inventoryCard from './inventoryCard.js'
import axios from 'axios';

const inventoryList = props => {
    const [inventory, setinventory] = useState([]);

    useEffect(() => {
        axios
        .post("")
        .then(res => {
            setinventory(res.data);
        })
        .catch(err => {
            console.log(Error, err);
        })
    })
}