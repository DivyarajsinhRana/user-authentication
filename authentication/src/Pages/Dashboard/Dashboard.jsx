import styles from '../Dashboard/dashboard.module.css'

const Dashboard = () => {
    return (
        <div style={{ padding: 10 }}>
            <div className={styles.dashboardPage} >
                <h1>
                    Dashboard
                </h1>
                <button className={styles.logoutBtn} >Logout</button>
            </div>
            <p>Welcome to the dashboard</p>
        </div>
    )
}

export default Dashboard
