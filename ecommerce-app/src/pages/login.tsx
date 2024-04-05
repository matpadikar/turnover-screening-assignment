import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import CategoryList from "./category_list";

import { api } from "~/utils/api";
import styles from "./index.module.css";

interface LoginProps {
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
    loginSuccessful: boolean;
    setLoginSuccessful: (loginSuccessful: boolean) => void;
}

const Login = ({setShowLogin, showLogin, loginSuccessful, setLoginSuccessful}: LoginProps) => {

    const mutation = api.post.matchPassword.useMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform login logic here
        mutation.mutate({email, password});
        setLoginSuccessful(true);
    };

    return (
        <div>
            {showLogin && (!loginSuccessful || mutation.error)&&
            (<div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {mutation.error && <div className={styles.error}>{mutation.error.message}</div>}
            </div>)
            }
            {showLogin && loginSuccessful && !mutation.error && <CategoryList email={email}/>}
        </div>
    );
};

export default Login;