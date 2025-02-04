import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        id="wd-username"
        className="wd-username form-control mb-2"
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-username form-control mb-2"
      />
      <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100">
        Sign up
      </Link>
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
