import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../context/auth';
const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [auth, setAuth] = useAuth();
    //get user data
    useEffect(() => {
        const { email, name, phone, address } = auth?.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
    }, [auth?.user]);

    //form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("/api/v1/auth/profile", { name, email, password, phone, address });
            if (data?.errro) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem("auth");
                ls = JSON.parse(ls);
                ls.user = data.updatedUser;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile Updated Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"User Profile"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="user-auth-content-container">
                            <form onSubmit={handleSubmit} className="user-auth-form">
                                <h2>Signup</h2>

                                <div className="user-auth-input-container">
                                    <label htmlFor="user-auth-input-name"><h4>USER PROFILE</h4></label>
                                    <input
                                        id="user-auth-input-name"
                                        className="user-auth-form-input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoFocus
                                    />
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
                                        disabled
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

                                    />
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


                                <button
                                    type="submit"
                                    className="solid-success-btn form-user-auth-submit-btn">
                                    Update profile
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Profile