import { useState } from "react";

function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-table-cell align-middle pt-2">
      <div className="card">
        <div className="card-body">
          <h1 className="h2 text-center">Sign Up Form</h1>
          <div className="m-sm-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Group Name</label>
                <input className="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input className="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
              </div>
              <div className="mb-3">
                <label className="form-label">ConfirmPassword</label>
                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
              </div>
              <div className="text-center mt-3">
                {/* <a href="index.html" className="btn btn-lg btn-primary">Sign up</a> */}
                <button type="submit" className="btn btn-lg btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;