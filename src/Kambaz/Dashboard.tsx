import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
// import {
//   setEnrollments,
//   addEnrollment,
//   deleteEnrollment,
// } from "./enrollments/reducer";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: any;
  addNewCourse: any;
  deleteCourse: any;
  updateCourse: any;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      let coursesData;
      if (currentUser && currentUser.role === "STUDENT" && enrolling) {
        // When enrollment mode is active, fetch all courses.
        coursesData = await courseClient.fetchAllCourses();
      } else {
        // Otherwise, fetch only the courses for the current user.
        coursesData = await userClient.findMyCourses();
      }
      setCourse(coursesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrolling]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser && currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => {
              setCourse({ ...course, name: e.target.value });
            }}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
        {currentUser && currentUser.role === "STUDENT" && (
          <button
            className="btn btn-primary float-end"
            id="wd-enrollments"
            onClick={() => setEnrolling(!enrolling)}
          >
            enrollments
          </button>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body" style={{ minHeight: "210px" }}>
                    <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap fw-bold">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-hidden"
                      style={{ height: "95px" }}
                    >
                      {course.description}
                    </p>

                    {enrolling ? (
                      <button
                        onClick={(event) => {
                          event.preventDefault(); // prevents navigation
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    ) : (
                      <>
                        <button className="btn btn-primary">Go</button>
                        {currentUser?.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                              id="wd-edit-course-click"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
