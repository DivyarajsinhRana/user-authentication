// import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
 
import { useAuthState } from '../Context'
 
// const AppRoutes = ({ element, path, isPrivate, ...rest }) => {
 
//     const userDetails = useAuthState()
//     return (
//         <Route
//             path={path}
//             render={props =>
//                 isPrivate && !Boolean(userDetails.token) ? (
//                     <Navigate
//                         to={{ pathname: "/login" }}
//                     />
//                 ) : (
//                         // <Component {...props} />
//                        {element,...props}
//                     )
//             }
//             {...rest}
//         />
//     )
// }
 
// export default AppRoutes

const AppRoutes = ({ children,isPrivate }) => {
    // let auth = useAuth();
    const userDetails = useAuthState()
   
    
  
    if (isPrivate && !Boolean(userDetails.token)) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" />;
    }
  
    return children;
  }
  export default AppRoutes