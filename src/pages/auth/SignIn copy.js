import { useState } from "react";
import { Link } from 'react-router-dom';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-table-cell align-middle">
      <div className="text-center mt-4">
        <h1 className="h2">Welcome back to Leave Management System</h1>
        <p className="lead"> Sign in to your account to continue </p>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <div className="text-center">
              <img src="assets/img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e)=>setUserName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                <small>
                  <Link to="/forgot-password">Forgot password?</Link>
                </small>
              </div>
              <div>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                  <span className="form-check-label"> Remember me next time </span>
                  <span className="dont-have-account">Don't have account?</span> <Link className="sign-up-link" to="/sign-up">Sign Up</Link>
                </label>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;