import React from 'react'
import { NavLink } from "react-router-dom";
const EmpMenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group dashboard-menu">
                    <h4>emp Panel</h4>
                    <NavLink
                        to="/dashboard/employee/products"
                        className="list-group-item list-group-item-action"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/dashboard/employee/orders"
                        className="list-group-item list-group-item-action"
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default EmpMenu