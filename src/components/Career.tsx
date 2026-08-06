import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>K.P.B. Hinduja College, Mumbai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started my journey in software development by learning
              programming, web technologies, and database management while
              building academic projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development certification</h4>
                <h5>Asterix Solution – India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive websites, collaborated on real-world
              projects, and gained practical experience with React, PHP,
              Node.js, and MySQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Create Mind Studio (Airtech Company)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a Full Stack Web Developer at Create Mind Studio (Airtech Company), where I design, develop, and maintain scalable web applications. I successfully developed a complete Learning Management System (LMS) with Admin, Instructor, and Student portals, featuring secure authentication, course management, class and chapter management, resource management, student enrollment, role-based access control, responsive UI, and performance optimization. I continue to enhance the platform by adding new features, improving user experience, optimizing performance, and ensuring scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
