import React from 'react'
import { NavLink } from 'react-router-dom'
const ManagerMenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group dashboard-menu">
                    <h4>Manager Panel</h4>
                    <NavLink
                        to="/dashboard/manager/create-product"
                        className="list-group-item list-group-item-action"
                    >
                        Create Product
                    </NavLink>
                    <NavLink
                        to="/dashboard/manager/products"
                        className="list-group-item list-group-item-action"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/dashboard/manager/orders"
                        className="list-group-item list-group-item-action"
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default ManagerMenu