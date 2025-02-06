import { CgCalendar } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        id="wd-name"
        type="text"
        className="form-control my-0"
        value="A1"
      />
      <div id="wd-description" className="border form-control my-3">
        The assignment is <span className="text-danger">available online.</span>
        <br />
        <br /> Submit a link to the landing page of your Web application running
        on Netlify. <br /> <br />
        The landing page should include the following:
        <br /> <br />
        <ul>
          <li>Your full name and section.</li>
          <li> links to each of the lab assignments.</li>
          <li> Link to the Kanbas application.</li>
          <li> links to all relevant source code repositories</li>
        </ul>
        The kanbas application should include a link to navigate back to the
        landing page.
      </div>
      <div className="mb-3 row">
        <label htmlFor="point" className="col-sm-4 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="point" value="100" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">
          Assignment Group
        </label>
        <div id="wd-group" className="col-sm-8">
          <select className="form-select">
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
          <select className="form-select">
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
              <select className="form-select">
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
                  Student Annotation
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
                  value="May 13, 2024, 11:59 PM"
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
              <div className="wd-grid-row">
                <div className="d-flex align-items-center wd-grid-col-half-page">
                  <input
                    type="text"
                    value="May 6, 2024"
                    className="form-control"
                  />
                  <CgCalendar className="fs-1" />
                </div>
                <div className="d-flex align-items-center wd-grid-col-half-page">
                  <input type="text" className="form-control" />
                  <CgCalendar className="fs-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button className="btn btn-lg bg-secondary m-1">Cancel</button>
        <button className="btn btn-lg bg-danger m-1">Save</button>
      </div>
    </div>
  );
}
