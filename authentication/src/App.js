import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AppRoutes from "./Components/AppRoute"
import routes from "./Config/routes"
import { AuthProvider, useAuthState } from "./Context"


const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {
            routes.map((route, index) => {
              console.log(route);
              return (
                <Route key={index} path={route.path} element={route.component} isPrivate={route.isPrivate} />
              )
            }
            )
          }
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
