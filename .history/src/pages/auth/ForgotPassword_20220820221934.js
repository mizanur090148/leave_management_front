import { useState } from "react";
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-table-cell align-middle">
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <div className="text-center">
              <h1 className="h3">Forgot Password</h1>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label"> Email</label>
                <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e)=>setUserName(e.target.value)} />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;