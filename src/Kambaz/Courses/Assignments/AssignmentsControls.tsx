import { current } from "@reduxjs/toolkit";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AssignmentsControls({ cid }: { cid: string }) {
  const navigate = useNavigate();
  const navigateToAssignmentEditor = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/Add`);
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div
      id="wd-assignments-controls"
      className="text-nowrap d-flex align-items-end"
    >
      <span className="form-control input-group mb-0 me-2">
        <FaMagnifyingGlass className="fs-5 me-2" />
        <input
          type="text"
          className="me-2 float-start border-0"
          id="assignment-search"
          placeholder="Search..."
        />
      </span>
      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <button
            id="wd-view-progress"
            className="btn btn-md btn-secondary me-1 float-end"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
          <button
            id="wd-view-progress"
            className="btn btn-md btn-danger me-1 float-end"
            onClick={navigateToAssignmentEditor}
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
        </>
      )}
    </div>
  );
}
