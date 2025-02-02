import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6662 Program Design Paradigms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    OOD and functional design
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2744 Computer Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Different operating systems
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3066 Web Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Front-end and back-end frameworks
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7777 Database
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Design data intensive applications
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7889 Securities
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Discuss security topics
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4022 Graphical User Interface
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Design application interfaces
                  </p>
                  <button className="btn btn-primary mt-auto"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
