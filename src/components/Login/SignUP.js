import SignUpcss from './Signup.module.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SIGNUP = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");

        const Details=({email,username,tel,password})
        localStorage.setItem("data",JSON.stringify(Details))
    };
    const gotoLoginPage = () => navigate("/Login");

    return (
        <div className={SignUpcss.signup__container}>
            <h2>Sign up </h2>
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
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={username}
                    placeholder="Enter Your UserName"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='tel'>Phone Number</label>
                <input
                    type='tel'
                    name='tel'
                    id='tel'
                    placeholder='Enter Your Phone Number'
                    value={tel}
                    required
                    onChange={(e) => setTel(e.target.value)}
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
                    Already have an account?{""}
                    <span className={SignUpcss.link} onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SIGNUP