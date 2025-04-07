import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) =>
    pathname.includes(path) ? "active text-dark" : "";
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && (
        <>
          <Link
            to="/Kambaz/Account/Signin"
            id="wd-account-signin-link"
            className={`list-group-item text-danger ${active(
              "Signin"
            )} border border-0`}
          >
            Signin
          </Link>
          <Link
            to="/Kambaz/Account/Signup"
            id="wd-account-signup-link"
            className={`list-group-item text-danger ${active(
              "Signup"
            )} border border-0`}
          >
            Signup
          </Link>
        </>
      )}
      {currentUser && (
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-account-profile-link"
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}
