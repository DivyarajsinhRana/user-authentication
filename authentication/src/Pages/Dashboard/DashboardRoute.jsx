import { Route, Routes } from "react-router-dom"
import About from "../About/About"
import Profile from "../Profile/Profile"

const DashboardRoute = () => {
    return (
        <div>
              <Routes>
               <Route path="/dashboard/Profile" element={<Profile/>}/>
                     <Route path="/dashboard/About" element={<About/>}/>
            </Routes>
   
        </div>
    )
}

export default DashboardRoute
