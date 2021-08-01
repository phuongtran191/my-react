import React from 'react';
import { Router, Switch, } from "react-router-dom";
import history from './utils/history';
import './App.css';
import 'antd/dist/antd.css';

import HomePage from './pages/user/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TheaterPage from './pages/user/Theater';
import MemberPage from './pages/user/Member';
import ContactPage from './pages/user/Contact';
import ProductDetailPage from './pages/user/ProductDetail';
import NotFoundPage from './pages/NotFound';
import DefaultLayout from './layouts/DefaultLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/Dashboard';

function App(props) {
  
  return (
    // jsx format
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path="/" component={HomePage} />
        <DefaultLayout exact path="/theater" component={TheaterPage} />
        <DefaultLayout exact path="/contact" component={ContactPage} />
        <DefaultLayout exact path="/login" component={LoginPage} />
        <DefaultLayout exact path="/register" component={RegisterPage} />

        <AdminLayout exact path="/admin" component={DashboardPage} />

        <DefaultLayout exact path="/member" component={MemberPage} />
        <DefaultLayout exact path="/product/:id" component={ProductDetailPage} />
        <DefaultLayout component={NotFoundPage} />
      </Switch>
    </Router>
  );
} // end of function App()

export default App;