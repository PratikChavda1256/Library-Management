import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import './UserAuth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
    //form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", { email, newPassword, answer });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }

    }
    return (
        <Layout title={'forgot password'}>
            <div className="user-auth-content-container">
                <form onSubmit={handleSubmit} className="user-auth-form">
                    <h2>Reset Password</h2>

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
                        <label htmlFor="user-auth-input-password"><h4>NewPassword</h4></label>
                        <input
                            id="user-auth-input-password"
                            className="user-auth-form-input"
                            type="password"
                            placeholder="NewPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-answer"><h4>Answer</h4></label>
                        <input
                            id="user-auth-input-answer"
                            className="user-auth-form-input"
                            type="text"
                            placeholder="Enter Your Favorite Sport Name"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="solid-success-btn form-user-auth-submit-btn">
                        RESET
                    </button>

                    <div className="new-user-container">
                        <Link to="/Register" className="links-with-blue-underline" id="new-user-link">
                            Create new account &nbsp;
                        </Link>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default ForgotPassword