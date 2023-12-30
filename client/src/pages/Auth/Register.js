import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import "./UserAuth.css"
import axios from 'axios';
import toast from 'react-hot-toast';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [termsAndConditionsCheckbox, setTermsAndConditionsCheckbox] = useState(false);
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    //form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                navigate('/login');
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
        <Layout title={" Register "}>
            <div className="user-auth-content-container">
                <form onSubmit={handleSubmit} className="user-auth-form">
                    <h2>Signup</h2>

                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-name"><h4>Name </h4></label>
                        <input
                            id="user-auth-input-name"
                            className="user-auth-form-input"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>

                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-email"><h4>Email address</h4></label>
                        <input
                            id="user-auth-input-email"
                            className="user-auth-form-input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
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
                            required />
                    </div>
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-phone"><h4>Phone</h4></label>
                        <input
                            id="user-auth-input-phone"
                            className="user-auth-form-input"
                            type="number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                    </div>
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-address"><h4>Address</h4></label>
                        <input
                            id="user-auth-input-address"
                            className="user-auth-form-input"
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                    </div>
                    <div className="user-auth-input-container">
                        <label htmlFor="user-auth-input-answer"><h4>Answer</h4></label>
                        <input
                            id="user-auth-input-address"
                            className="user-auth-form-input"
                            type="text"
                            placeholder="what is Your Favorite sports?"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            required />
                    </div>
                    <div className="accept-terms-container">
                        <input
                            type="checkbox"
                            id="accept-terms"
                            checked={termsAndConditionsCheckbox}
                            onChange={() => setTermsAndConditionsCheckbox(prevState => !prevState)}
                        />
                        <label htmlFor="accept-terms">I accept all terms and conditions</label>
                    </div>

                    <button
                        type="submit"
                        className="solid-success-btn form-user-auth-submit-btn"
                        disabled={termsAndConditionsCheckbox ? "" : true}
                    >
                        Create New Account
                    </button>

                    <div className="existing-user-container">
                        <Link to="/login" className="links-with-blue-underline existing-user-link" id="existing-user-link">
                            Already have an account &nbsp;
                        </Link>
                    </div>

                </form>
            </div>

        </Layout>
    )
}

export default Register