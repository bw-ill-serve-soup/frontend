import axios from 'axios';

export const GET_USER_DATA_START = 'GET_USER_DATA_START'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_FAILURE =  'GET_USER_DATA_FAILURE'
export const POST_USER_DATA_START = 'POST_USER_DATA_START'
export const POST_USER_DATA_SUCCESS = 'POST_USER_DATA_SUCCESS'
export const POST_USER_DATA_FALIURE = 'POST_USER_DATA_FAILURE'
export const getData = () => {
  return dispatch => {
    dispatch({ type: GET_USER_DATA_START });
    axios
      .get('')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_DATA_FAILURE, payload: err.response });
        console.log(err);
      });
  };
};