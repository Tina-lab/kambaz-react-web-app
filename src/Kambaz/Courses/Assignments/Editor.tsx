import { CgCalendar } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector } from "react-redux";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
export default function AssignmentEditor() {
  const { cid = "", aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const numAssignments = assignments.length;
  const originalAssignment = assignments.find((a: any) => a._id === aid);
  const [newassignment, setNewassignment] = useState<any>(
    originalAssignment || {
      _id: `A${cid.slice(-1)}0${numAssignments + 1}`,
      title: "New Assignment",
      course: cid,
      points: 100,
      availableFrom: "July 7th",
      availableUntil: "Sept 15th",
      due: "Sept 1st",
      description: "New Description",
    }
  );
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const assignment = await coursesClient.createAssignmentForCourse(
      cid,
      newassignment
    );
    dispatch(addAssignment(assignment));
  };
  const saveAssignment = async () => {
    await assignmentsClient.updateAssignment(newassignment);
    dispatch(updateAssignment(newassignment));
  };
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        id="wd-name"
        type="text"
        className="form-control my-0"
        value={newassignment?.title}
        onChange={(e) => {
          if (currentUser && currentUser.role === "FACULTY")
            setNewassignment({ ...newassignment, title: e.target.value });
        }}
        placeholder="New Assignment"
      />
      <textarea
        id="wd-description"
        className="border form-control my-3"
        rows={8}
        value={newassignment?.description}
        onChange={(e) => {
          if (currentUser && currentUser.role === "FACULTY")
            setNewassignment({ ...newassignment, description: e.target.value });
        }}
        placeholder="New Description"
      />
      <div className="mb-3 row">
        <label htmlFor="point" className="col-sm-4 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="point"
            value={newassignment?.points}
            onChange={(e) => {
              if (currentUser && currentUser.role === "FACULTY")
                setNewassignment({ ...newassignment, points: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">
          Assignment Group
        </label>
        <div id="wd-group" className="col-sm-8">
          <select
            className="form-select"
            disabled={currentUser && currentUser.role !== "FACULTY"}
          >
            <option selected value="ASSIGNMENTS">
              ASSIGNMENTS
            </option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="PROJECT">PROJECT</option>
            <option value="EXAMS">EXAMS</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-4 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div id="wd-display-grade-as" className="col-sm-8 ">
          <select
            className="form-select"
            disabled={currentUser && currentUser.role !== "FACULTY"}
          >
            <option selected value="Percentage">
              Percentage
            </option>
            <option value="Letter">Letter</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-4 col-form-label text-end"
        >
          Submission Type
        </label>
        <div id="wd-submission-type" className="col-sm-8">
          <div className="border">
            <div className="m-3 row">
              <select
                className="form-select"
                disabled={currentUser.role !== "FACULTY"}
              >
                <option selected value="Online">
                  Online
                </option>
                <option value="In-person">In-person</option>
              </select>
            </div>
            <div className="m-3 row">
              <label className="fw-bold">Online Entry Options</label>
            </div>
            <div className="m-3 row">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input wd-border-thin wd-check-square"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="wd-text-entry"
                >
                  Text Entry
                </label>
              </div>
            </div>
            <div className="m-3 row">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input wd-border-thin wd-check-square"
                  type="checkbox"
                  id="wd-website-url"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="wd-website-url"
                >
                  Website URL
                </label>
              </div>
            </div>
            <div className="m-3 row">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input wd-border-thin wd-check-square"
                  type="checkbox"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
            </div>
            <div className="m-3 row">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input wd-border-thin wd-check-square"
                  type="checkbox"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
              </div>
            </div>
            <div className="m-3 row">
              <div className="form-check align-items-center">
                <input
                  className="form-check-input wd-border-thin wd-check-square"
                  type="checkbox"
                  id="wd-file-upload"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="wd-file-upload"
                >
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-assign" className="col-sm-4 col-form-label text-end">
          Assign
        </label>
        <div id="wd-assign" className="col-sm-8">
          <div className="border">
            <div className="m-3 row">
              <label htmlFor="wd-assign-to" className="fw-bold fs-6">
                Assign to
              </label>
            </div>
            <div className="m-3 row">
              <div id="wd-assign-to" className="m-2 row border form-control">
                <div className="d-flex">
                  <button className="btn btn-md btn-secondary">
                    Everyone <RxCross1 />
                  </button>
                </div>
              </div>
            </div>
            <div className="m-3 row">
              <label className="fw-bold fs-6">Due</label>
            </div>
            <div className="mx-3 row">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  value={newassignment?.due}
                  onChange={(e) => {
                    if (currentUser && currentUser.role === "FACULTY")
                      setNewassignment({
                        ...newassignment,
                        due: e.target.value,
                      });
                  }}
                  className="form-control"
                />
                <CgCalendar className="fs-1" />
              </div>
            </div>
            <div className="m-3 row">
              <div className="wd-grid-row">
                <div className="wd-grid-col-half-page">Available From</div>
                <div className="wd-grid-col-half-page">Available Until</div>
              </div>
            </div>
            <div className="mx-3 row">
              <div className="wd-grid-row mb-3">
                <div className="d-flex align-items-center wd-grid-col-half-page">
                  <input
                    type="text"
                    value={newassignment?.availableFrom}
                    onChange={(e) => {
                      if (currentUser && currentUser.role === "FACULTY")
                        setNewassignment({
                          ...newassignment,
                          availableFrom: e.target.value,
                        });
                    }}
                    className="form-control"
                  />
                  <CgCalendar className="fs-1" />
                </div>
                <div className="d-flex align-items-center wd-grid-col-half-page">
                  <input
                    type="text"
                    value={newassignment?.availableUntil}
                    onChange={(e) => {
                      if (currentUser && currentUser.role === "FACULTY")
                        setNewassignment({
                          ...newassignment,
                          availableUntil: e.target.value,
                        });
                    }}
                    className="form-control"
                  />
                  <CgCalendar className="fs-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-lg bg-secondary m-1"
        >
          Cancel
        </Link>
        {currentUser && currentUser.role === "FACULTY" && (
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-lg bg-danger m-1"
            onClick={() => {
              if (originalAssignment) {
                saveAssignment();
              } else {
                createAssignmentForCourse();
              }
            }}
          >
            Save
          </Link>
        )}
      </div>
    </div>
  );
}
