import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove the assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <div id="wd-assignments">
      {cid && <AssignmentsControls cid={cid} />}
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <TiArrowSortedDown className="me-2 fs-3" />
            <span className="fs-4 fw-bold">ASSIGNMENTS</span>
            <div className="d-flex align-items-center ms-auto">
              <span className="px-3 py-1 rounded-pill border">
                40% of Total
              </span>
              <BsPlus className="fs-1 mx-3" />
              <IoEllipsisVertical className="fs-1" />
            </div>
          </div>
          <ul
            id="wd-assignment-list"
            className="wd-assignments list-group rounded-0"
          >
            {filteredAssignments.map((assignment: any) => (
              <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <GiNotebook className="me-2 fs-3 text-success" />
                <div id="assignment-description">
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                  >
                    {assignment.title}
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |
                  <b>Not available until</b> {assignment.availableFrom}
                  <br />
                  <b>Due</b> {assignment.due} at 11:59pm | {assignment.points}
                  pts
                </div>
                <div className="d-flex align-items-center float-end ms-auto">
                  <FaTrash
                    className="text-danger me-2 mb-1"
                    onClick={() => {
                      handleDelete(assignment._id);
                    }}
                  />
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-3 mx-2" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
