import { NavLink } from "react-router-dom";
import s from "./Login.module.css";
import { GrGoogle } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsCheck } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectloginEyeState } from "../../../features/loginSlice";
import { loginEye } from "../../../features/loginSlice";

const Login = () => {
  const eyeState = useSelector(selectloginEyeState);
  const dispatch = useDispatch();
  const eye = () => dispatch(loginEye(!eyeState));

  return (
    <section className={s.container}>
      <div className={s.left_block}>
        <h1>Hi, Welcome Back</h1>
        <img src="./images/illustration_login.png" />
        <NavLink to="/">
          <button>Go To Home</button>
        </NavLink>
      </div>
      <form className={s.form_container} onSubmit={(e) => e.preventDefault()}>
        <div className={s.right_block}>
          <h2>Sign in to Minimal</h2>
          <p>
            Don’t have an account? <NavLink> Get started</NavLink>
          </p>
          <div className={s.logo_container}>
            <span>
              <GrGoogle />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <BsTwitter />
            </span>
          </div>
          <div className={s.line_container}>
            <p></p>
            <span>OR</span>
            <p></p>
          </div>
          <input type="email" placeholder="Email address" />
          <span onClick={eye} className={s.eye}>
            {eyeState ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
          <input type={eyeState ? "text" : "password"} placeholder="Password" />
          <div className={s.check_container}>
            <label className={s.custom_checkbox}>
              <input type="checkbox" className={s.hidden_checkbox} />
              <div className={s.checkbox}>
                <BsCheck className={s.checkmark} />
              </div>
            </label>
            <NavLink to="/">Forgot password?</NavLink>
          </div>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};
export default Login;
