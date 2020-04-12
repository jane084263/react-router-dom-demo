import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./sideBar";
import Posts from "./posts";
import Users from "./users";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <div className="sideBarcontent">
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </div>
    </div>
  );
};

export default Dashboard;
