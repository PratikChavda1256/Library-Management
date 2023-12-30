import { useState, useEffect } from 'react';
import { useAuth } from "../../context/auth";
//routing functionlity nested routing keliye
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';
export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    //get
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/admin-auth');
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path="" />;
}



// import { useState, useEffect } from 'react';
// import { useAuth } from '../../context/auth';
// import axios from 'axios';
// import Spinner from '../Spinner';
// import { useNavigate, Outlet } from 'react-router-dom';

// export default function AdminRoute() {
//     const [ok, setOk] = useState(false);
//     const [auth, setAuth] = useAuth();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();


//     useEffect(() => {
//         const authCheck = async () => {
//             try {
//                 const res = await axios.get('/api/v1/auth/admin-auth');
//                 if (res.data.ok) {
//                     setOk(true);
//                 } else {
//                     setOk(false);
//                 }
//             } catch (error) {
//                 console.error('Error checking admin authentication:', error);
//                 setError('An error occurred while checking admin authentication.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (auth?.token) {
//             authCheck();
//         } else {
//             // No token, handle as needed (redirect to login, etc.)
//             setLoading(false);
//         }
//     }, [auth?.token]);

//     useEffect(() => {
//         // Redirect to home page if user is not an admin
//         if (!ok && !loading && !error) {
//             navigate.push('/');
//         }
//     }, [ok, loading, error, navigate]);

//     if (loading) {
//         // Show loading spinner while checking authentication
//         return <Spinner />;
//     }

//     if (error) {
//         // Handle error state (show error message, redirect, etc.)
//         return <div>Error: {error}</div>;
//     }

//     return ok ? <Outlet /> : null; // Render null if not admin (handled by redirect)
// }
