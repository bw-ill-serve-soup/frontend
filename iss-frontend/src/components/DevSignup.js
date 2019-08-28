import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Label} from '../styled-components/LoginStyle'
import {Form} from '../styled-components/LoginStyle'
import {Button} from '../styled-components/LoginStyle'
import {Input} from '../styled-components/LoginStyle'

export const ErrorParagraph = styled.p`
    padding: 16px;
    background-color: #ffb7b7;
    color: red;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;


function DevSignup(props) {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('');

    const login = e => {
        e.preventDefault();
        axios
            .post('https://soupkitchen-buildweek.herokuapp.com/api/register', credentials)
            .then(res => {
                console.log(res)
                setErrorMessage('')
                props.history.push('/login')
            })
            .catch(err => {
                console.log(err)
                setErrorMessage(`${credentials.username} is already in use.`)
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
                <Button>Sign Up!</Button>
            </Form>
            {errorMessage && <ErrorParagraph>
                                    {errorMessage}
                            </ErrorParagraph>}
        </div>
    )
}

export default DevSignup;