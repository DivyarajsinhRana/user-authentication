import { useNavigate,Route,Routes, useParams, BrowserRouter } from 'react-router-dom';
import { useAuthDispatch, useAuthState, logout } from '../../Context'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Linechart from './Chart';
import Table from './Table';


const Dashboard = ({children}) => {
    // console.log(children)
    const dispatch = useAuthDispatch();
    const userdetail = useAuthState();
    // console.log("userdetail>>>", userdetail);
    const navigate = useNavigate();
    const handlelogout = () => {
        logout(dispatch);
        navigate("/login");
    }
    return (
        <>
        <>
             <Navbar handleLogout={handlelogout} />
                <div className="row">
                    <div className='col-2'>
                <Sidebar data={userdetail} />
                    </div>
                    <div className='d-inline-block col-10'>
                        <div className="mx-auto mt-3  w-50 h-auto">
                        <Linechart/>
                        </div>
                        <Table/>
                        {children}
                    </div>
                <div>
            </div>
            </div>
    
        </>
        
            {/* <div style={{ padding: 10 }}>
                <div className={styles.dashboardPage} >
                    <h1>
                        Dashboard
                    </h1>
                    
                </div>
                <p>Welcome {userdetail.user.email}</p>
            </div> */}
        </>
    )
}

export default Dashboard
