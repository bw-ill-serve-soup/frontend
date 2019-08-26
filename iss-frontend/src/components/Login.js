import React, {useState} from "react";
import axios from 'axios'

const SignIn = (props) => {
    const [creds, setCreds] = useState({ userName: "", password: "" });
    


    const changeHandler = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    };
}