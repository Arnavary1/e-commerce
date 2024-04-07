// import { Route, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Context/auth";

// const PublicRoute = ({ children, restricted, ...rest }) => {
//   let auth = useAuth();
//   let navigate = useNavigate();
//   if (auth.user && restricted) navigate("/my-account");
//   return <Route {...rest}>{!auth.user || !restricted ? children : null}</Route>;
// };

// export default PublicRoute;
