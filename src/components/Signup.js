import React, {useState} from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import {Label} from '../styled-components/LoginStyle'
import {Form} from '../styled-components/LoginStyle'
import {Button} from '../styled-components/LoginStyle'
import {Input} from '../styled-components/LoginStyle'


function Signup() {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const login = e => {
        e.preventDefault();
        axios
            .post('https://soupkitchen-buildweek.herokuapp.com/api/register', credentials)
            .then(res => {
                console.log(res)
                // localStorage.setItem('token', res.data.token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        console.log(credentials) 
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login-container'>
            <Form onSubmit={login}>
            <Label>Username</Label>
                <Input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <Label>Password</Label>
                <Input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <Button>Submit!</Button>
            </Form>
            
        </div>
    )
}

export default Signup;