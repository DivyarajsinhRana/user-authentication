import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AppRoutes from "./Components/AppRoute"
import routes from "./Config/routes"
import { AuthProvider, useAuthState } from "./Context"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/Login/Login"
import Navbar from "./Pages/Navbar"
import PageNotFound from "./Pages/NotFound/PageNotFound"

const App = () => {
  // const userDetails= useAuthState();
  // console.log(userDetails);
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <AppRoutes isPrivate={true}>
          <Dashboard />
        </AppRoutes>
      } />
      <Route path="/*" element={<AppRoutes isPrivate={true}>
        <PageNotFound />
      </AppRoutes>} />
      {/* {
            routes.map((route, index) => {
              console.log(route.path)
              console.log(route.component)
              // console.log( route.isPrivate && !Boolean(userDetails.token))
              return(
                <>
                <Route key={index} path={route.path} element={route.component} isPrivate={route.isPrivate}/>
                </>
              )
              
            }
            )
          } */}

    </Routes>


  )
}

export default App
