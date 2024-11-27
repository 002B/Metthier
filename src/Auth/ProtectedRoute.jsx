import React from 'react';
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import PermissionDenied from '../Pages/Permission-Denied/PermissionDenied';
import LoginPage from '../Pages/Login/Login';

export default function ProtectedRoute({
  allowedRoles,
  children,
}) {
  const { user } = useAuth();

  if (user === null) {
    return <LoginPage />
  }

  if  ( user === undefined || (allowedRoles && !allowedRoles.includes(user.role)) ){
   {
    return <PermissionDenied />;
  }
  }
  return children;
}