import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/Admin';
import AuthLayout from '../layouts/Auth';
import Dashboard from '../pages/dashboard';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword'
import LeaveApplication from '../pages/leaveApplication';

const routes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthLayout>
            <SignIn />
          </AuthLayout>}
        />
        <Route path="/sign-up" element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>}
        />
        <Route path="/forgot-password" element={
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>}
        />
        <Route path="/home" element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>}
        />
        {/*<Route path="admin/dashboard" element={*/}
        {/*  <AdminLayout>*/}
        {/*    <Dashboard />*/}
        {/*  </AdminLayout>}*/}
        {/*/>*/}
        <Route path="leave-application" element={
          <AdminLayout>
            <LeaveApplication />
          </AdminLayout>}
        />
      </Routes>
    </BrowserRouter>
);


export default  routes;

