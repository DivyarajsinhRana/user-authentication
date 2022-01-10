import styles from '../Login/login.module.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context' 
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch()
  console.log(dispatch);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, errorMessage } = useAuthState()  
  const handleLogin = async (e) => {
    e.preventDefault();
  try {
    let response = await loginUser(dispatch, {email,password}) //loginUser action makes the request and handles all the neccessary state changes
    console.log("response>>>",response)
    console.log(!response.user);
    if (!response.user) return
    navigate('/dashboard') //navigate to dashboard on success
} catch (error) {
    console.log(error)
}
 }
    return (
      <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {
                    errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
                }
                <form >
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
