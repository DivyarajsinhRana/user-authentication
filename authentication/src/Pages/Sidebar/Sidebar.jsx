import { Link, Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Profile from '../Profile/Profile'
import styles from '../Sidebar/sidebar.module.css'
const Sidebar = ({data}) => {
    return (
        <>
        <div   className={styles.sidebar}>
            {/* <p className='text-success'>  Welcome {data.user.email} </p> */}
                <ul>
                   <li className={styles.listitem} ><Link to="/dashboard" className={styles.link}>Dashboard</Link></li>
                   <li className={styles.listitem}><Link to="Profile"  className={styles.link}>Profile</Link></li>
                   <li className={styles.listitem}><Link to="About" className={styles.link}>About</Link></li>
               </ul>
        </div>
         
        </>
    )
}

export default Sidebar
