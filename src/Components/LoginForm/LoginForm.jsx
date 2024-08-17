import React from 'react'
import { GiBunnySlippers } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Bunny-wallet<GiBunnySlippers /></h1><h3>A Cypto app</h3>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required /> <FaUserAstronaut className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required /> <FaUnlock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginForm