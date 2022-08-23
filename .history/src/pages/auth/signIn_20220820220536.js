import { useState } from "react";
import { Link } from 'react-router-dom';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div class="d-table-cell align-middle">
      <div class="text-center mt-4">
        <h1 class="h2">Welcome back to Leave Management System</h1>
        <p class="lead"> Sign in to your account to continue </p>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="m-sm-4">
            <div class="text-center">
              <img src="assets/img/avatars/avatar.jpg" alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132" />
            </div>
            <form>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e)=>setUserName(e.target.value)} />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                <small>
                  <a href="index.html">Forgot password?</a>
                </small>
              </div>
              <div>
                <label class="form-check">
                  <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                  <span class="form-check-label"> Remember me next time </span>
                  <span class="sign-up-link">Don't have account? <Link to="/sign-up">Sign Up</span></Link>
                </label>
              </div>
              <div class="text-center mt-3">
                <button type="submit" class="btn btn-lg btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;