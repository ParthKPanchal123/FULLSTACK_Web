import { useState } from 'react';
import React from 'react';
import './Login.css';
import { assets } from '../../Assets/assets';

function Login({ setShowLogin }) {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className="login">
            <form className="login-container">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Close"  // Alt text added for accessibility
                    />
                </div>
                <div className="login-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder="Name" required />}

                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <br/>
                    <button>
                        {currState === "Sign Up" ? "Create Account" : "Login"}
                    </button>
                    <div className="login-condition">
                        <input type="checkbox" required />
                        <p>Continuing , I agree to the Privacy Policy And Use Our Service</p>
                    </div>
                    {currState === "Login" ? <p onClick={() => setCurrState("Sign Up")}>Create A new Account? <span>Click Here</span></p> : <p onClick={() => setCurrState("Login")}>Already have an Account? <span>Click Here</span></p>}


                </div>
            </form>
        </div>
    );
}

export default Login;
