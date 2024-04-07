import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../../Context/index.jsx";

import { AuthProvider } from "../../Context/auth.jsx"; // AuthContext is the context that will be used to store the user's data
import Navbar from "../../Components/Navbar/index.jsx";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/index.jsx";
import "./App.css";

import Home from "../Home/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import SignIn from "../SignIn/index.jsx";
import Logout from "../Logout/index.jsx";
import PublicRoute from "./PublicRoute.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/smartphones"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/laptops"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/fragrances"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/skincare"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/groceries"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/home-decoration"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      {/* PrivateRoute: */}
      <Route
        path="/my-order"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders"
        element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders/last"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders/:id"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route
        path="/sign-in"
        element={
          <PublicRoute restricted={true}>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
      {/* NotFound: */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  );
};
export default App;
