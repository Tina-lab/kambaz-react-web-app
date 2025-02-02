import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <LessonControlButtons />
            </li>

            {/* <span className="wd-title">READING</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-lessons list-group-item p-3 ps-1">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-lessons list-group-item p-3 ps-1">
                  Full Stack Developer - Chapter 2 - User Interface
                </li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-lessons list-group-item p-3 ps-1">
                  Introduction to Web Development
                </li>
                <li className="wd-lessons list-group-item p-3 ps-1">
                  Creating an HTTP Server with NodeJS
                </li>
                <li className="wd-lessons list-group-item p-3 ps-1">
                  Creating a React Applications
                </li>
              </ul> */}
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2, Lecture 2 - Formatting User Interface with HTML
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 1</span>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 2</span>
              <LessonControlButtons />
            </li>
            {/* <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Learn how to create user interface with HTML
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Deploy the assignment to Netlify
                </li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Introduction to HTML and DOM
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Formatting web content with headings
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  Formatting content with lists and tables
                </li>
              </ul>
            </li> */}
          </ul>
        </li>
        {/* <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li> */}
      </ul>
    </div>
  );
}
