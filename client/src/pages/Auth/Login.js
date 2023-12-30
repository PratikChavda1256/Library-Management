// import React from 'react'
// import Layout from '../../components/Layout/Layout'
// import { Link } from 'react-router-dom'
// import "./UserAuth.css"
// const Login = () => {
//     return (
//         <Layout>
//             <div className="user-auth-content-container">
//                 <form className="user-auth-form">
//                     <h2>Login</h2>

//                     <div className="user-auth-input-container">
//                         <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
//                         <input
//                             id="user-auth-input-email"
//                             className="user-auth-form-input"
//                             type="email"
//                             placeholder="Email"
//                             // value={userEmail}
//                             // onChange={(event) => setUserEmail(event.target.value)}
//                             required />
//                     </div>

//                     <div className="user-auth-input-container">
//                         <label htmlFor="user-auth-input-password"><h4>Password</h4></label>
//                         <input
//                             id="user-auth-input-password"
//                             className="user-auth-form-input"
//                             type="password"
//                             placeholder="Password"
//                             // value={userPassword}
//                             // onChange={(event) => setUserPassword(event.target.value)}
//                             required />
//                     </div>

//                     <div className="user-options-container">
//                         <div className="remember-me-container">
//                             <input type="checkbox" id="remember-me" />
//                             <label htmlFor="remember-me">Remember Me</label>
//                         </div>
//                         <div>
//                             <Link to="#" className="links-with-blue-underline" id="forgot-password">
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                     </div>

//                     <button type="submit" className="solid-success-btn form-user-auth-submit-btn">Login</button>

//                     <div className="new-user-container">
//                         <Link to="/Register" className="links-with-blue-underline" id="new-user-link">
//                             Create new account &nbsp;
//                         </Link>
//                     </div>

//                 </form>
//             </div>
//         </Layout>
//     )
// }

// export default Login

import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './UserAuth.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    //find  location
    const location = useLocation();
    //form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", { email, password, });
            if (res && res.data.success) {

                //setAuth 
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || '/');
                toast.success(res.data && res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }

    }
    return (
        <Layout title={"Login "}>
            <div className="user-auth-content-container">
                <form onSubmit={handleSubmit} className="user-auth-form">
                    <h2>Login</h2>

                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
                        <input
                            id="user-auth-input-email"
                            className="user-auth-form-input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-password"><h4>Password</h4></label>
                        <input
                            id="user-auth-input-password"
                            className="user-auth-form-input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="user-options-container">
                        <div className="remember-me-container">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember Me</label>
                        </div>
                        <div>
                            <button type="button" className="links-with-blue-underline" id="forgot-password" onClick={() => { navigate('/forgot-password') }}>
                                Forgot Password?
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="solid-success-btn form-user-auth-submit-btn">
                        Login
                    </button>

                    <div className="new-user-container">
                        <Link to="/Register" className="links-with-blue-underline" id="new-user-link">
                            Create new account &nbsp;
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
