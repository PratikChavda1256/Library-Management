import { useState, useEffect } from 'react';
import { useAuth } from "../../context/auth";
//routing functionlity nested routing keliye
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';
export default function PrivateRoutes() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    //get
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/user-auth');
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}