import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
// import {
//   setEnrollments,
//   addEnrollment,
//   deleteEnrollment,
// } from "./enrollments/reducer";
export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const addCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const deleteEnrollment = async (course: any) => {
    await userClient.deleteEnrollment(course);
    setEnrollments(
      enrollments.filter((enrollment) => enrollment.course !== course._id)
    );
  };

  const createEnrollment = async (course: any) => {
    const newEnrollment = await userClient.createEnrollment(course);
    setEnrollments([...enrollments, newEnrollment]);
  };

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
      setCourses(coursesData);
    } catch (error) {
      console.error(error);
    }
  };

  const [enrolling, setEnrolling] = useState(false);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const fetchEnrollments = async () => {
    try {
      const enrollmentsData = await userClient.findMyEnrollments();
      setEnrollments(enrollmentsData);
    } catch (error) {
      console.error("Failed to fetch enrollments", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrolling]);
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

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
              onClick={addCourse}
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
                          (enrollment: any) => enrollment.course === course._id
                        ) && (
                          <button
                            className="btn btn-success float-end"
                            onClick={() => {
                              deleteEnrollment(course);
                            }}
                          >
                            Unenroll
                          </button>
                        )}
                      {enrolling &&
                        !enrollments.some(
                          (enrollment: any) => enrollment.course === course._id
                        ) && (
                          <button
                            className="btn btn-danger float-end"
                            onClick={() => {
                              createEnrollment(course);
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
                              deleteCourse(course._id);
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
