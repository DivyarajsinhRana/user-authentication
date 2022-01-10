import Login from '../Pages/Login/Login'
import Dashboard from '../Pages/Dashboard/Dashboard'
import PageNotFound from '../Pages/NotFound/PageNotFound'


const routes =[
    {
      path:'/login',           
      component: <Login/>,
      isPrivate: false
    },
    {
      path:'/dashboard',
      component: <Dashboard/>,
      isPrivate: true
    },
    {
      path:'/*',
      component:<PageNotFound/>,
      isPrivate: true
    },
  ]
   
  export default routes