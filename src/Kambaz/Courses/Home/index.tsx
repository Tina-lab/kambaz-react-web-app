import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-lg-block ms-3">
        {currentUser && currentUser.role === "FACULTY" && <CourseStatus />}
      </div>
    </div>
  );
}
