import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// This is private route component which means  if auth from redux is false it and user is trying to go to the 
//  the children component of private route and it will redirect back to login page and throw an alert regarding it
  
const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((store) => store.auth);

  
  if (!auth) {
    alert("Login Now To add New Deals");
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;