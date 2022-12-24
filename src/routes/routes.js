import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/Admin';
import AuthLayout from '../layouts/Auth';
import Dashboard from '../pages/dashboard';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword'
import LeaveApplication from '../pages/leaveApplication';
import LeaveDetails from '../pages/leaveDetails';
import Company from '../pages/settings/company';
import LeaveType from '../pages/settings/leveType';

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
        <Route path="settings/company" element={
          <AdminLayout>
            <Company />
          </AdminLayout>}
        />
        <Route path="settings/leave-type" element={
          <AdminLayout>
            <LeaveType />
          </AdminLayout>}
        />
        <Route path="leave-details" element={
          <AdminLayout>
            <LeaveDetails />
          </AdminLayout>}
        />
      </Routes>
    </BrowserRouter>
);


export default  routes;

