import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostRequest } from "../../hooks/usePostRequest";
import { loginSuccess } from "../../store/slices/authSlice"
import { postRequest } from '../../utils/axiosRequests';

function SignIn() {
  const [authError, setAuthError] = useState('');
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    postRequest('auth/login', data)
      .then(data=>{
        sessionStorage.setItem('token', JSON.stringify(data.token));
        dispatch(loginSuccess(data));
        navigate("/leave-application");
      })
      .catch(error=>{
        setAuthError(error.message);
        console.log("from react query error: ", error.message);
      })
  };

  // console.log(watch("example"));


  return (
    <div className="d-table-cell align-middle">
      <div className="text-center mt-4">
        <h1 className="h2">Welcome To Leave Management System</h1>
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
                <label className="form-label">Username</label>
                <input
                  className="form-control form-control-lg" 
                  type="text" 
                  placeholder="Enter your user name"
                  {...register("email", {
                    required: true,
                    maxLength: 30,
                    //pattern: /^[A-Za-z]+$/i
                  })}
                />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "maxLength" && (
                  <p className="error-msg">This field cannot exceed 30 characters</p>
                )}
                {/* {errors?.email?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )} */}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg" 
                  type="password" 
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    maxLength: 30
                  })}
                />
                {errors?.password?.type === "required" && <p>This field is required</p>}
                {errors?.password?.type === "maxLength" && (
                  <p className="error-msg">This field cannot exceed 30 characters</p>
                )}
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
                <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-lg btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;