import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
const Form = styled.form`
border-radius: 20px;
color: black;
.
    font-family: 'Ubuntu', 'Lato', sans-serif;
    font-weight: 400;
    /* Size and position */
    width: 300px;
    position: relative;
    margin: 60px auto 30px;
    padding: 10px;
    overflow: hidden;

    /* Styles */
    background: #111; 
    border-radius: 0.4em;
    border: 1px solid #191919;
    box-shadow: 
        inset 0 0 2px 1px rgba(255,255,255,0.08), 
        0 16px 10px -8px rgba(0, 0, 0, 0.6);


    /* Size and position */
    
     /* Size and position */
     width: 50%;
    float: left;
    padding: 8px 5px;
    margin-bottom: 10px;
    font-size: 12px;

    /* Styles */
    background: #1f2124; /* Fallback */
    background: -moz-linear-gradient(#1f2124, #27292c);
    background: -ms-linear-gradient(#1f2124, #27292c);
    background: -o-linear-gradient(#1f2124, #27292c);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#1f2124), to(#27292c));
    background: -webkit-linear-gradient(#1f2124, #27292c);
    background: linear-gradient(#1f2124, #27292c);    
    border: 1px solid #000;
    box-shadow:
        0 1px 0 rgba(255,255,255,0.1);
    border-radius: 3px;

    /* Font styles */
    font-family: 'Ubuntu', 'Lato', sans-serif;
    color: #fff;
    background: #27292c;
    box-shadow: inset 0 0 2px #000;
    background: #494d54;
    border-color: #51cbee;
    outline: none; /* Remove Chrome outline */
    float: left;
    width: 50%;

    /*For remember me*/
    width: auto;
    float: none;
    display: inline-block;
    text-transform: capitalize;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0px;
    text-indent: 2px;
    margin-left: 10px;
    vertical-align: middle;


`

const Button = styled.button`
background: none;
border: 1px solid blue;
border-radius: 8px;
color: blue;
font-size: 1rem;
width: 100px;
/* Width and position */
width: 100%;
    padding: 8px 5px;
 /* Styles */
 border: 1px solid #0273dd; /* Fallback */
    border: 1px solid rgba(0,0,0,0.4);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.3),
        inset 0 10px 10px rgba(255,255,255,0.1);
    border-radius: 3px;
    background: #38a6f0;
    cursor:pointer;
  
    /* Font styles */
    font-family: 'Ubuntu', 'Lato', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 15px;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);





`

const Label = styled.label`
width: 50%;
    float: left;
    padding-top: 9px;

    /* Styles */
    color: #ddd;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 1px 0 #000;
    text-indent: 10px;
    font-weight: 700;
    cursor: pointer;
`


const Input = styled.input`
 /* Size and position */
 width: 50%;
    float: left;
    padding: 8px 5px;
    margin-bottom: 10px;
    font-size: 12px;

    /* Styles */
    background: #1f2124; /* Fallback */
    background: -moz-linear-gradient(#1f2124, #27292c);
    background: -ms-linear-gradient(#1f2124, #27292c);
    background: -o-linear-gradient(#1f2124, #27292c);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#1f2124), to(#27292c));
    background: -webkit-linear-gradient(#1f2124, #27292c);
    background: linear-gradient(#1f2124, #27292c);    
    border: 1px solid #000;
    box-shadow:
        0 1px 0 rgba(255,255,255,0.1);
    border-radius: 3px;

    /* Font styles */
    font-family: 'Ubuntu', 'Lato', sans-serif;
    color: #fff;
`

function DevLogin() {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const login = e => {
        e.preventDefault();
        axios
            .post('https://soupkitchen-buildweek.herokuapp.com/api/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
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

export default DevLogin;