import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import routes from "./Config/routes"
import Login from "./Pages/Login/Login"

const App = () => {
  return (
    <Router>
        <Routes>
            {
              routes.map(route=>(
                <Route key={route.path} path={route.path} element={route.component}/>
              ))
            }
            {/* <Route path="/" element={<Login/>} /> */}
        </Routes>
    </Router>
  )
}

export default App
