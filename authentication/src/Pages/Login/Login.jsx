import '../Login/login.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAuthDispatch()
    //   console.log(dispatch);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loading, errorMessage } = useAuthState()
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let response = await loginUser(dispatch, { email, password }) //loginUser action makes the request and handles all the neccessary state changes
            console.log("response>>>", response)
            console.log(!response.user);
            if (!response.user) return
            navigate('/dashboard') //navigate to dashboard on success
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            navigate('/dashboard');
        }
    }, [])
    return (
        <div className="container">
            <div>
                <h1>Login to continue</h1>
                {
                    errorMessage ? <p className="error">{errorMessage}</p> : null
                }
                <div className='form'>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading}/>
                      
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading}/>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                    <button type="submit" onClick={handleLogin} disabled={loading} className="btn btn-outline-secondary">login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
