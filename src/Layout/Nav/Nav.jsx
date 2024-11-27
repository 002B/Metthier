import React from "react";
import Logo from "../../assets/Logo/Logo-no-tg.png";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Auth/AuthProvider";
import "./Nav.css";
import "boxicons";

const navList = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: "dashboard",
    iconType: "solid",
  },
  {
    name: "Inventory",
    path: "inventory",
    icon: "spray-can",
    iconType: "solid",
  },
  {
    name: "Member Management",
    path: "member-management",
    icon: "group",
    iconType: "solid",
  },
  {
    name: "Report Box",
    path: "report-box",
    icon: "comment-error",
    iconType: "regular",
  },
  {
    name: "Unassigned Work",
    path: "unassigned-work",
    icon: "list-plus",
    iconType: "regular",
  },
  {
    name: "Activity Log",
    path: "activity-log",
    icon: "time",
    iconType: "solid",
  },
  {
    name: "Setting",
    path: "setting",
    icon: "cog",
    iconType: "solid",
  },
];

function getNavListByRole(userRole) {
  switch (userRole) {
    case "member":
      return navList.filter(item => ["Dashboard", "Inventory", "Setting"].includes(item.name));
    case "super_member":
      return navList.filter(item => ["Dashboard", "Inventory", "Member Management", "Setting"].includes(item.name));
    case "worker":
      return navList.filter(item => ["Dashboard", "Inventory" , "Unassigned Work", "Setting"].includes(item.name));
    case "admin":
      return navList.filter(item => ["Dashboard", "Inventory", "Member Management", "Report Box", "Unassigned Work", "Activity Log", "Setting"].includes(item.name));
    case "super_admin":
      return navList.filter(item => ["Dashboard", "Data Analysis", "Inventory", "Member Management", "Report Box", "Unassigned Work", "Activity Log", "Setting"].includes(item.name));
    default:
      return [];
  }
}

const Nav = () => {
  const { user, handleLogout } = useAuth();
  const userNavList =getNavListByRole(user.role);
  return (
    <div className="navbar bg-white flex flex-col h-full justify-between">
      <div className="navigator m-2 flex flex-col gap-4">
        <div className="logo-container flex w-full justify-center items-center">
          <div className="logo-img  w-4/5">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="nav-container flex flex-col gap-2">
          {userNavList.map((item, index) => (
            <ul key={index}>
              <div className="h-10 flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-secondary font-bold w-full flex justify-between items-center active-bar nav-Active"
                      : "w-full text-gray nav-unActive";
                  }}
                >
                  <div className="p-2 flex items-center ">
                    <box-icon
                      color="#FD6E28"
                      type={item.iconType}
                      name={item.icon}
                    ></box-icon>
                    <span className="item-name ml-2">{item.name}</span>
                  </div>
                </NavLink>
              </div>
            </ul>
          ))}
        </div>
      </div>
      <div className="profile-container flex justify-between items-center mb-4 gap-2">
        <div className="profile flex gap-2 items-center">
          <div className="profile-img ml-2 flex items-center justify-center">
            <box-icon size="lg" color="#FD6E28" name="user-circle"></box-icon>
          </div>
          <div className="profile-name">
            <p className="font-bold text-lg">{user.display_name}</p>
            <p>{user.display_role}</p>
          </div>
        </div>
        <div className="logout mr-2">
          <Link className="flex items-center" to="/login" onClick={() => handleLogout()}>
            <box-icon color="#FD6E28" type="regular" name="log-out"></box-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
