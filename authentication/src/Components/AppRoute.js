import { Navigate, Route } from "react-router-dom";
import { useAuthState } from "../Context";

const AppRoutes = ({ element: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useAuthState()
  
    return (
        <Route
            path={path}
           element={  isPrivate && !Boolean(userDetails.token) ? <Navigate to={{pathname:"/login"}}/> :
                    Component}
            {...rest}
        />

    )
}
 
export default AppRoutes