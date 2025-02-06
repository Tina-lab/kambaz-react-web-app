import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div
      id="wd-assignments-controls"
      className="text-nowrap d-flex align-items-end"
    >
      <span className="input-group mb-0 me-2">
        <FaMagnifyingGlass className="fs-1 me-2" />
        <input
          type="text"
          className="form-control me-2 float-start"
          id="assignment-search"
          placeholder="Search..."
        />
      </span>
      <button
        id="wd-view-progress"
        className="btn btn-md btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button
        id="wd-view-progress"
        className="btn btn-md btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
