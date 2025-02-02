import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import LessonControlButtons from "../Modules/ModuleControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <span className="fs-4 fw-bold">ASSIGNMENTS</span>
            <div className="float-end">
              <span className="px-3 py-1 rounded-pill border">
                40% of Total
              </span>
              <BsPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul
            id="wd-assignment-list"
            className="wd-assignments list-group rounded-0"
          >
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GiNotebook className="me-2 fs-3 text-success" />
              <div id="assignment-description">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A1 - ENV + HTML
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 6th at 12am
                <br />
                <b>Due</b> May 13 at 11:59pm | 100 pts
              </div>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GiNotebook className="me-2 fs-3 text-success" />
              <div id="assignment-description">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 13th at 12am
                <br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GiNotebook className="me-2 fs-3 text-success" />
              <div id="assignment-description">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 20th at 12am
                <br />
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
