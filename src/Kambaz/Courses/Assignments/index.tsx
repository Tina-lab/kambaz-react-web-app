import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TiArrowSortedDown } from "react-icons/ti";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((m: any) => m.course === cid);
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
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
            {assignments.map((assignment) => (
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
                  <b>Not available until</b> {assignment.availabe} at 12am
                  <br />
                  <b>Due</b> {assignment.due} at 11:59pm | 100 pts
                </div>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
