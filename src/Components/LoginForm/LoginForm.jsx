import React from 'react'
import { GiBunnySlippers } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login<GiBunnySlippers /></h1> 
                <div className='input-box'>
                    <input type="text" placeholder='Username' required /> <FaUserAstronaut />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Password' required /> <FaUnlock />
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