import  '../Login/login.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context' 
import { useNavigate } from 'react-router-dom';
import {  useState,useEffect } from 'react';
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
    let response = await loginUser(dispatch, {email,password}) //loginUser action makes the request and handles all the neccessary state changes
    console.log("response>>>",response)
    console.log(!response.user);
    if (!response.user) return
    navigate('/dashboard') //navigate to dashboard on success
} catch (error) {
    console.log(error)
}
 }
 useEffect(() => {
        if(localStorage.getItem("currentUser"))
        {
            navigate('/dashboard');
        }
 }, [])
    return (
      <div className="container">
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {
                    errorMessage ? <p className="error">{errorMessage}</p> : null
                }
                <form >
                    <div className="loginForm">
                        <div className="loginFormItem">
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                        </div>
                        <div className="loginFormItem">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                        </div>
                        <div className='d-flex justify-content-center'>

                    <button onClick={handleLogin} disabled={loading}>login</button>
                        </div>
                    </div>
                </form>
                {/* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
            </div>
        </div>
    )
}

export default Login
