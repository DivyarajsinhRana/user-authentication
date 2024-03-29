// import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuthState } from '../Context'

 
   
  
const AppRoutes = ({ children,isPrivate }) => {
    // const userDetails = useAuthState()
    
    if (isPrivate && !localStorage.getItem("currentUser")) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" />;
    }
    return children;
  }
  export default AppRoutes