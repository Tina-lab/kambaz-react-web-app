import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        className="wd-username form-control mb-2"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        id="wd-username"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password form-control mb-2"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        id="wd-password"
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary mb-2 w-100"
      >
        Sign in
      </button>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
