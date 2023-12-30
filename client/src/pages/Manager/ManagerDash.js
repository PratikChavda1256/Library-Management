import React from 'react'
import Layout from '../../components/Layout/Layout';
import ManagerMenu from '../../components/Layout/ManagerMenu';
import { useAuth } from '../../context/auth';
const ManagerDash = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Manager Dashboard"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <ManagerMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3> manager Name : {auth?.user?.name}</h3>
                            <h3> manager Email : {auth?.user?.email}</h3>
                            <h3> manager Contact : {auth?.user?.phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ManagerDash