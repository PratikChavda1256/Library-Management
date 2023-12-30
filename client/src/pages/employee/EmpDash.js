import React from 'react'
import { useAuth } from '../../context/auth';
import Layout from '../../components/Layout/Layout';
import EmpMenu from '../../components/Layout/EmpMenu';
const EmpDash = () => {
    const [auth] = useAuth();
    return (
        <Layout title={"Empoleey dashboard"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <EmpMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3> Emp Name : {auth?.user?.name}</h3>
                            <h3> Emp Email : {auth?.user?.email}</h3>
                            <h3> Emp Contact : {auth?.user?.phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EmpDash