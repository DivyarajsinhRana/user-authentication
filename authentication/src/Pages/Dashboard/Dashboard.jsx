import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState, logout } from '../../Context'
import styles from '../Dashboard/dashboard.module.css'
import Navbar from '../Navbar';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import About from '../About/About';
import Main from '../Main/Main';
const Dashboard = () => {
    const dispatch = useAuthDispatch();
    const userdetail = useAuthState();
    console.log("userdetail>>>", userdetail);
    const navigate = useNavigate();
    const handlelogout = () => {
        logout(dispatch);
        navigate("/login");
    }
    return (
        <>
            <div>
                    <Navbar handleLogout={handlelogout} />
                <div>
                <Sidebar />
                    <div>
                      <Main/>
                    </div>
                </div>
            </div>

            <div style={{ padding: 10 }}>
                <div className={styles.dashboardPage} >
                    <h1>
                        Dashboard
                    </h1>
                    {/* <button className={styles.logoutBtn} onClick={handlelogout} >Logout</button> */}
                </div>
                <p>Welcome {userdetail.user.email}</p>
            </div>
        </>
    )
}

export default Dashboard
