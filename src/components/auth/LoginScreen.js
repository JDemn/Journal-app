import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

//actions
import { startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formState, haleInputChange] = useForm({
        email : 'dsoftwaredeniz@gmail.com',
        password : '12345'
    })

    const {email, password } = formState;

    const handleLogin =(e)=>{
        e.preventDefault();
        // console.log(email, password);
        dispatch(startLoginEmailPassword(email,password)); //en lugar de llamar al login directamente. llamo al dispatch mejor
    } 
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit = { handleLogin }> 
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete='off'
                    value = { email }
                    onChange = { haleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value = { password }
                    onChange = { haleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                // disabled = {true}
                >
                    Login
                </button>

                <div className="auth__social-network">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
