import SignUpcss from './Signup.module.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LOGIN = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");
    };
    const gotoLoginPage = () => navigate("/Signup");

    return (
        <div className={SignUpcss.signup__container}>
            <h2>Please Enter Your Login Details... </h2>
            <form className={SignUpcss.signup__form} onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter Your Email Address'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='tel'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Enter Your Password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={SignUpcss.signupBtn}>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className={SignUpcss.link} onClick={gotoLoginPage}>
                        Register
                    </span>
                </p>
            </form>


        </div>
    );
};

export default LOGIN