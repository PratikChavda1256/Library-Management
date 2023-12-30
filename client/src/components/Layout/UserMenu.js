import React from "react";
import { NavLink } from "react-router-dom";
// import "./menu.css";
const UserMenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group dashboard-menu">
                    <h4>Dashboard</h4>
                    <NavLink
                        to="/dashboard/user/Profile"
                        className="list-group-item list-group-item-action"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/dashboard/user/order"
                        className="list-group-item list-group-item-action"
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default UserMenu;
