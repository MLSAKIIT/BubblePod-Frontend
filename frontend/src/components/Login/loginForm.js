import React from 'react';
import './newlogin.css';

const loginForm = () => {
    return (
        <>
            <div className="loginFormContainer">
                <div className="upperContainer">
                    <div className="leftFormContainer">

                        <input type="text" name="name" placeholder='Name' />
                        <input type="text" name="email" placeholder='Email' />
                        <input type="text" name="phone" placeholder='Phone' />
                        <input type="text" name="insta" placeholder='Insta' />
                    </div>
                    <div className="rightFormContainer">
                        <input type="text" name="gender" placeholder='Gender' />
                        <input type="text" name="rel" placeholder='Relation Status' />
                        <input type="text" name="lang" placeholder='Language' />
                        <input type="text" name="city" placeholder='City' />
                    </div>
                </div> 
                <div className="bottomContainer ">
                    <button className="signUpBtn shadow">
                        Sign Up
                    </button> 
                    <button className="signUpWithGoogle shadow2" > 
                    <i className="fi fi-brands-google fis"></i>
                        Sign in with Google 
                    </button>
                </div>
            </div>
        </>
    )
}

export default loginForm