import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { api } from "~/utils/api";
import styles from "./index.module.css";

interface SignUpProps {
    setShowSignUp: (showSignUp: boolean) => void;
    showSignUp: boolean;
}

const SignUp = ({ setShowSignUp, showSignUp }: SignUpProps) => {

    const mutation = api.post.createUser.useMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showEmailVerification, setShowEmailVerification] = useState(false);
    const [email_code, setEmailCode] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleShowEmailVerificationChange = (e: React.FormEvent<HTMLFormElement>) => {
        setShowEmailVerification(true);
    };

    const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailCode(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform sign up logic here
        // console.log({email, password, name});
        mutation.mutate({email, password, name});
        setShowSignUp(false);
    };

    return (
        <div>
            {showSignUp && !showEmailVerification &&
                (<form onSubmit={handleShowEmailVerificationChange}>
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
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <button type="submit">Verify Email</button>
                </form>)
            }
            {showSignUp && showEmailVerification &&
                (<form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Enter email verification code (anything for demo):</label>
                        <input
                            type="email_code"
                            id="email_code"
                            value={email_code}
                            onChange={handleEmailCodeChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>)
            }
            {mutation.error && <div className={styles.error}>{mutation.error.message}</div>}
        </div>
    );
};

export default SignUp;