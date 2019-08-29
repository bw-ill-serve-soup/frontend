import React, {useState} from "react";
//import axiosWithAuth from '../Auth/axiosWithAuth'
import axios from 'axios'
//import styled from 'styled-components'
import {Label, Form, Button, Input} from '../styled-components/LoginStyle'

 
    



  const Login = event => {
    const [creds, setCreds] = useState({ username: "", password: "" });
    const handleSubmit = event => {
      event.preventDefault();
      //axiosWithAuth()
      axios
        .post('https://soupkitchen-buildweek.herokuapp.com/api/login', creds)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          
        })
        .catch(err => console.log(err.response));
    };


    const changeHandler = event => {

        setCreds({ ...creds, [event.target.name]: event.target.value });
    };

return (
    <>
<Form onSubmit={handleSubmit}>
        <Label>Username</Label>
        <Input
        name='username'
        type='text'
        value={creds.username}
        onChange={changeHandler}
        placeholder='Username'
        />
        <Label>password</Label>
        <Input
        name='password'
        type='password'
        value={creds.password}
        onChange={changeHandler}
        placeholder='Password'
        />
        <Button>Let's ROCK!</Button>
      </Form>

    </>
  );

}
export default Login
