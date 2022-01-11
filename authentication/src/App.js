import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import AppRoutes from "./Components/AppRoute"
import routes from "./Config/routes"
import { AuthProvider, logout, useAuthDispatch, useAuthState } from "./Context"
import About from "./Pages/About/About"
import Dashboard from "./Pages/Dashboard/Dashboard"
import DashboardContent from "./Pages/Dashboard/DashboardContent"


import Login from "./Pages/Login/Login"
import Navbar from "./Pages/Navbar"

import PageNotFound from "./Pages/NotFound/PageNotFound"
import Profile from "./Pages/Profile/Profile"
import Sidebar from "./Pages/Sidebar/Sidebar"

const App = () => {
  // const userDetails= useAuthState();
  // console.log(userDetails);
 
  
  return (
    <>
    
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={
        <AppRoutes isPrivate={true}>
          <Dashboard>
            <Routes>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="" element={<DashboardContent/>}/>
            </Routes>
            </Dashboard>
        </AppRoutes>
      } 
      >
         {/* <Route path="/*" element={<AppRoutes isPrivate={true}>
        <PageNotFound />
      </AppRoutes>} /> */}
        </Route>
     </Routes>
      {/* <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/> */}
      {/* <Route path="/profile" element={
        <AppRoutes isPrivate={true}>
          <Profile /> 
        </AppRoutes>
      } />
      <Route path="/dashboard" element={
        <AppRoutes isPrivate={true}>
          <About /> 
        </AppRoutes>
      } /> */}

     
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

   
    </>


  )
}

export default App
