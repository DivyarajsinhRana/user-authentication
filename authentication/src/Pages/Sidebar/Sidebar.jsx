import { Dashboard, DescriptionOutlined, People, PeopleAltOutlined } from '@material-ui/icons'
import { Link, Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Profile from '../Profile/Profile'
import  '../Sidebar/sidebar.css'
const Sidebar = ({data}) => {
    return (
        <>
        <div className="sidebar">
                <ul className="pt-5">
                   <li  className="pt-5 " ><Link to="/dashboard" className="link"><Dashboard/>  Dashboard</Link></li>
                   <li  className="pt-5 "><Link to="Profile" className="link"><PeopleAltOutlined/> Profile</Link></li>
                   <li  className="pt-5 "><Link to="About" className="link"><DescriptionOutlined/>   About</Link></li>
               </ul>
        </div>
         
        </>
    )
}

export default Sidebar
