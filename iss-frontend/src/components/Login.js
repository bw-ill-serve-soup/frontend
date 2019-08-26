import React, {useState} from "react";

import {getData} from '../Actions'

  const Login = () => {
    const [creds, setCreds] = useState({ userName: "", password: "" });
    


    const changeHandler = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    };

return (
    <>
<form onSubmit={getData}>
        <label>Username</label>
        <input
        name='username'
        type='text'
        value={creds.userName}
        onChange={changeHandler}
        placeholder='Username'
        />
        <label>password</label>
        <input
        name='password'
        type='password'
        value={creds.password}
        onChange={changeHandler}
        placeholder='Password'
        />
        <button>Let's ROCK!</button>
      </form>

    </>
  );

}
export default Login