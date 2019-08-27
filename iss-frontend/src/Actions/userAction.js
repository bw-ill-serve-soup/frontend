import axios from 'axios';

export const GET_USER_DATA_START = 'GET_USER_DATA_START'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_FAILURE =  'GET_USER_DATA_FAILURE'
export const POST_USER_DATA_START = 'POST_USER_DATA_START'
export const POST_USER_DATA_SUCCESS = 'POST_USER_DATA_SUCCESS'
export const POST_USER_DATA_FAILURE = 'POST_USER_DATA_FAILURE'
export const getData = (event, creds) => {
  return dispatch => {
    dispatch({ type: GET_USER_DATA_START });
    event.preventDefault();
    axios
      .post('https://soupkitchen-buildweek.herokuapp.com/api/login', creds)
      .then(res => {
        // res.data.data
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/');
        dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_DATA_FAILURE, payload: err.response });
        console.log(err);
      });
  };
};


/*export const postData = () => {
    return dispatch => {
      dispatch({ type: POST_USER_DATA_START });
      axios
        .post('https://soupkitchen-buildweek.herokuapp.com/api/register')
        .then(res => {
          // res.data.data
          console.log(res);
          dispatch({ type: POST_USER_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: POST_USER_DATA_FAILURE, payload: err.response });
          console.log(err);
        });
    };
  };*/