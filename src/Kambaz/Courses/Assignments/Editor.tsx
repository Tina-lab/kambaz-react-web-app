export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h4>
        <b>Assignment Name</b>
      </h4>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section links to each of the lab
        assignments Link to the Kanbas application links to all relevant source
        code repositories The kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="PROJECT">PROJECT</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
              <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
              <option value="in-person">in-person</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotations</label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" value="2024-05-13" id="wd-due-date" />
            <br />
            <br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-to">Available to</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    value="2024-05-06"
                    id="wd-available-from"
                  />
                </td>
                <td>
                  <input type="date" value="2024-05-20" id="wd-available-to" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
