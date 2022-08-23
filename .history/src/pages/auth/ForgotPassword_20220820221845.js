import { useState } from "react";
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-table-cell align-middle">
      {/* <div className="text-center mt-4">
        <h1 className="h2">Forgot Password</h1>
      </div> */}
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <div className="text-center">
              <h1 className="h2">Forgot Password</h1>
              {/* <img src="assets/img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" /> */}
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