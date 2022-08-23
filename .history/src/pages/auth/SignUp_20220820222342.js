import { useState } from "react";

function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div class="d-table-cell align-middle">
      {/* <div class="text-center mt-4">
        <h1 class="h2">Sign Up Form</h1>
        <p class="lead">
          Sign up to continue
        </p>
      </div> */}
      <div class="card">
        <div class="card-body">
     
          <h1 class="h2 text-center">Sign Up Form</h1>
     
          <div class="m-sm-4">
            <form>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input class="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label class="form-label">Group Name</label>
                <input class="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
              </div>
              <div class="mb-3">
                <label class="form-label">Company Name</label>
                <input class="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
              </div>
              <div class="mb-3">
                <label class="form-label">ConfirmPassword</label>
                <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
              </div>
              <div class="text-center mt-3">
                {/* <a href="index.html" class="btn btn-lg btn-primary">Sign up</a> */}
                <button type="submit" class="btn btn-lg btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;