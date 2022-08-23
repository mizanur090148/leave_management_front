import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/Admin'
import Dashboard from '../pages/dashboard'
import LeaveApplication from '../pages/leaveApplication'

const routes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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

