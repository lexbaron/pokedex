import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/login.css'

const Login = () => {

    const [userName, SetUserName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        console.log(userName)
        navigate("/pokedex")
        dispatch({
            type:"GET_USERNAME",
            payload: userName
    })
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <h3>Hola entrenador</h3>
            <p>para poder comenzar, ingresa tu nombre</p>
            <form action="" onSubmit={submit}>
                <input type="text"
                    onChange={e => SetUserName(e.target.value)}
                    value={userName}
                />
                <button>submit</button>
            </form>
            
        </div>
    );
};

export default Login;