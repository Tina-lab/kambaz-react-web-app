import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./enrollments/reducer";
import { useDispatch } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const [enrolling, setEnrolling] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const filteredCourses = enrolling
    ? courses
    : courses.filter((course: any) =>
        enrollments?.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

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
              onClick={() => {
                console.log(course);
                dispatch(addCourse(course));
              }}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => {
                dispatch(updateCourse(course));
              }}
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
        Published Courses (
        {
          courses.filter((course: any) =>
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            )
          ).length
        }
        )
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
          {filteredCourses.map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                {enrolling ? (
                  <div className="wd-dashboard-course-link text-decoration-none text-dark">
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
                      {enrolling &&
                        enrollments.some(
                          (enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        ) && (
                          <button
                            className="btn btn-success float-end"
                            onClick={() => {
                              dispatch(
                                deleteEnrollment(
                                  enrollments.find(
                                    (enrollment: any) =>
                                      enrollment.user === currentUser._id &&
                                      enrollment.course === course._id
                                  )._id
                                )
                              );
                            }}
                          >
                            Unenroll
                          </button>
                        )}
                      {enrolling &&
                        !enrollments.some(
                          (enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        ) && (
                          <button
                            className="btn btn-danger float-end"
                            onClick={() => {
                              dispatch(
                                addEnrollment({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
                            }}
                          >
                            Enroll
                          </button>
                        )}
                    </div>
                  </div>
                ) : (
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
                      <button className="btn btn-primary"> Go </button>
                      {currentUser && currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
