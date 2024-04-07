// Testing a login page

import React, { useState } from "react";
import { useRoutes, BrowserRouter, useNavigate } from "react-router-dom";
import { AppProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import "./App.css";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import LogOut from "../Logout";

const PrivateRoute = ({ children, user }) => {
  let navigate = useNavigate();
  if (!user) {
    navigate("/sign-in");
    return null;
  }

  return children;
};

const AppRoutes = ({ user, onLogin }) => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/smartphones", element: <Home /> },
    { path: "/laptops", element: <Home /> },
    { path: "/fragrances", element: <Home /> },
    { path: "/skincare", element: <Home /> },
    { path: "/groceries", element: <Home /> },
    { path: "/home-decoration", element: <Home /> },
    {
      path: "/my-account",
      element: (
        <PrivateRoute user={user}>
          <MyAccount />
        </PrivateRoute>
      ),
    },
    {
      path: "/my-order",
      element: (
        <PrivateRoute user={user}>
          <MyOrder />
        </PrivateRoute>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <PrivateRoute user={user}>
          <MyOrders />
        </PrivateRoute>
      ),
    },
    {
      path: "/my-orders/last",
      element: (
        <PrivateRoute user={user}>
          <MyOrder />
        </PrivateRoute>
      ),
    },
    {
      path: "/my-orders/:id",
      element: (
        <PrivateRoute user={user}>
          <MyOrder />
        </PrivateRoute>
      ),
    },
    { path: "/sign-in", element: <SignIn onLogin={onLogin} /> },
    { path: "/logout", element: <LogOut onLogin={onLogin} /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Perform your login logic here. For simplicity, we'll just set the user directly.
    setUser({ username, password });
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes user={user} onLogin={handleLogin} />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
