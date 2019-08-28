import {axiosWithAuth} from '../Auth/axiosWithAuth';
import { statement } from '@babel/template';

export const FETCH_INVENTORY_START = 'FETCH_INVENTORY_START';
export const FETCH_INVENTORY_SUCCESS = 'FETCH_INVENTORY_SUCCESS';
export const FETCH_INVENTORY_FAILURE = 'FETCH_INVENTORY_FAILURE';

export const getInventory = () => dispatch => {
  dispatch({type: FETCH_INVENTORY_START});
  axiosWithAuth()
  .get('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory')
  .then(res => {
    console.log('from action creator', res);
    dispatch({type: FETCH_INVENTORY_SUCCESS, payload: res.data})
  }) 
  .catch(err => {
    console.log(err)
    dispatch({type: FETCH_INVENTORY_FAILURE, payload: `${err.response}`})
  }) 
}

export const ADD_INVENTORY_START = 'ADD_INVENTORY_START';
export const ADD_INVENTORY_SUCCESS = 'ADD_INVENTORY_SUCCESS';
export const ADD_INVENTORY_FAILURE = 'ADD_INVENTORY_FAILURE';

export const addItem = (item) => dispatch => {
  dispatch({type: ADD_INVENTORY_START})
    axiosWithAuth()
    .post('https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory', item)
    .then(res => {
        console.log('from action creator', res);
        dispatch({type: ADD_INVENTORY_SUCCESS, payload: res.data.userInventory })
      })
      .catch(error => {
        console.log(error)
        dispatch({type: ADD_INVENTORY_FAILURE, payload: `${error.response}`})
      })
} 

export const DELETE_INVENTORY_START = 'DELETE_INVENTORY_START';
export const DELETE_INVENTORY_SUCCESS = 'DELETE_INVENTORY_SUCCESS';
export const DELETE_INVENTORY_FAILURE = 'DELETE_INVENTORY_FAILURE';

export const deleteItem = (item) => dispatch => {
  dispatch({type: DELETE_INVENTORY_START})
  axiosWithAuth()
    .delete(`https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory/${item.id}`)
    .then(res => {
      console.log(res)
      dispatch({type: DELETE_INVENTORY_SUCCESS, payload: item})
    })
    .catch(err => {
      console.log(err.response) 
      dispatch({type: DELETE_INVENTORY_FAILURE, payload: `${err.response}`})
    })
}

export const EDIT_INVENTORY_START = 'EDIT_INVENTORY_START';
export const EDIT_INVENTORY_SUCCESS = 'EDIT_INVENTORY_SUCCESS';
export const EDIT_INVENTORY_FAILURE = 'EDIT_INVENTORY_FAILURE';

export const editItem = (item) => dispatch => {
  dispatch({type: EDIT_INVENTORY_START})
  axiosWithAuth()
    .put(`https://soupkitchen-buildweek.herokuapp.com/kitchen/inventory`, item)
    .then(res => {
      console.log(res)
      dispatch({type: EDIT_INVENTORY_SUCCESS, payload: item})
    })
    .catch(err => {
      console.log(err) 
      dispatch({type: EDIT_INVENTORY_FAILURE, payload: `${err.response}`})
    })
}