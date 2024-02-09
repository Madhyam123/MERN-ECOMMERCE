import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
           Admin DASHBOARD
          </NavLink>
          <NavLink
            to="/dashboard/admin/"
            className="list-group-item list-group-item-action"
          >
           Active Users
          </NavLink>
          <h4>Apps</h4>
          <NavLink
            to="/dashboard1"
            className="list-group-item list-group-item-action"
          >
           Email Application
          </NavLink>
          <NavLink
            to="/dashboard2"
            className="list-group-item list-group-item-action"
          >
           Chat Application
          </NavLink>
          <NavLink
            to="/dashboard3"
            className="list-group-item list-group-item-action"
          >
           Invoice Templates
          </NavLink>
          <NavLink
            to="/dashboard4"
            className="list-group-item list-group-item-action"
          >
           Reviews
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
