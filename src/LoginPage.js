import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className='container__signUp'>
            <div className='form__wrap'>
                <h2>Easy~chat</h2>
                <form>
                    <input type="email" placeholder='Your email' />
                    <input type="password" placeholder='Enter your password' />
                    <button type="submit">Continue</button>
                    <p>You don't have an account? Register here.</p>
                </form>
            </div>
        </div>
    )
}
export default LoginPage