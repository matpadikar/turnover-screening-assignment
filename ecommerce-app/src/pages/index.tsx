import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import SignUp from "./sign_up";
import Login from "./login";

const Home = () => {
    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handleGoToLoginButtonClick = () => {
        setShowLogin(true); 
        setShowSignUp(false);
    };

    const handleGoToSignUpButtonClick = () => {
        setShowSignUp(true); 
        setShowLogin(false);
    };

    return (
        <div>
            <Head>
                <title>{showSignUp ? 'Sign Up' : (showLogin ? (loginSuccessful? '': 'Login') : '')}</title>
            </Head>
            {<div>
                <button onClick={() => window.location.reload()}>Go to Start</button>
            </div>}
            {(!showLogin && showSignUp)&& <div>
                <button onClick={handleGoToLoginButtonClick}>Go to Login</button>
            </div>}
            {(!showSignUp && showLogin && !loginSuccessful) && <div>
                <button onClick={handleGoToSignUpButtonClick}>Go to Sign Up</button>
            </div>}
            <h1>{showSignUp ? 'Sign Up' : (showLogin ? (loginSuccessful? '': 'Login') : '')}</h1>
            <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
            <Login showLogin={showLogin} 
                setShowLogin={setShowLogin} 
                loginSuccessful={loginSuccessful}
                setLoginSuccessful={setLoginSuccessful}/>
        </div>
    );
};

export default Home;