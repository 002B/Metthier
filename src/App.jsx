import "./App.css";
import Layout from "./Layout/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import AuthProvider from "./Auth/AuthProvider.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";

import ProductPage from './Pages/Product/ProductPage';
import LoginPage from "./Pages/Login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Inventory from "./Pages/Inventory/Inventory.jsx";
import MemberManagement from "./Pages/Member-Management/Member-Management.jsx";
import ReportBox from "./Pages/Report-Box/ReportBox.jsx";
import UnassignedWork from "./Pages/Unassigned-Work/UnassignedWork.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import ActivityLog from './Pages/Activity-Log/ActivityLog';

const router = createBrowserRouter([

  {
    path: "/Metthier/product",
    element: <ProductPage />,
  },
  {
    path: "/Metthier/login",
    element: <LoginPage />,
  },
  {
    path: "/Metthier/",
    element: (
      <ProtectedRoute allowedRoles={["super_admin", "admin", "worker", "super_member", "member"]}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/Metthier/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin", "worker", "super_member", "member"]}>
            <Dashboard />
          </ProtectedRoute>),
      },
      {
        path: "/Metthier/inventory",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin", "worker", "super_member", "member"]}>
            <Inventory />
          </ProtectedRoute>),
      },
      {
        path: "/Metthier/member-management",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin", "super_member"]}>
            <MemberManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Metthier/unassigned-work",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin", "worker"]}>
            <UnassignedWork />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Metthier/report-box",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin"]}>
            <ReportBox />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Metthier/activity-log",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin"]}>
            <ActivityLog />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Metthier/setting",
        element: (
          <ProtectedRoute allowedRoles={["super_admin", "admin", "worker", "super_member", "member"]}>
            <Setting />
          </ProtectedRoute>
        )
      },
    ],
  }
]);

const queryParameters = new URLSearchParams(window.location.search)
const company = queryParameters.get("company")
const branch = queryParameters.get("branch")
const id = queryParameters.get("id")

function App() {
  if (company && branch && id) {
    return (
      <div>
        <ProductPage company={company} branch={branch} id={id}/>
      </div>
    )
  } else {
    return (
      <AuthProvider>
        <div className="app bg-light">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    )
  }
}

export default App;
