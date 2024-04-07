import { useRoutes, BrowserRouter } from "react-router-dom";
import { AppProvider } from "../../Context";

import { AuthProvider } from "../../Context/auth"; // AuthContext is the context that will be used to store the user's data
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";
import Logout from "../Logout";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/smartphones", element: <Home /> },
    { path: "/laptops", element: <Home /> },
    { path: "/fragrances", element: <Home /> },
    { path: "/skincare", element: <Home /> },
    { path: "/groceries", element: <Home /> },
    { path: "/home-decoration", element: <Home /> },
    // Should be Private Route but for testing purposes it is public
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    // Private Routes
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/logout", element: <Logout /> },
    // Not Found
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
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
