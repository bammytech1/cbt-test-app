import logo from "../assets/aaua-logo.svg";

// import "../StudentDashboard.scss";
import Nav from "../components/Nav/Nav";
// import Instructions from "./instructions";
// import StartExam from "./startExam";
// import { Routes, Route } from "react-router-dom";

function result() {
  return (
    <div id="result" className="student-dash">
      <header className="header">
        <h3>ADEKUNLE AJASHIN UNIVERSITY AKUNGBA AKOKO</h3>
        <img src={logo} alt="" />
      </header>
      <main className=" main-container ">
        <Nav />
        <div className="result-dash-b">
          <aside className="profile col-this">
            <img src={logo} alt="" />
            <h4>
              welcome, Adekunle <span>Ajasin</span>
            </h4>
            
            <button className="btn-sec">LOG OUT</button>
          </aside>
          <div className="active result-row">
              <div className="col">
                <div>
                  <h3>Student ID</h3>
                  <p>121748612</p>
                </div>
                <div>
                  <h3>Department</h3>
                  <p>121345522</p>
                </div>
                <div>
                  <h3>Subject</h3>
                  <p>English</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <h3>Level</h3>
                  <p>300L</p>
                </div>
                <div>
                  <h3>Exam no.</h3>
                  <p>121345522</p>
                </div>
                <div>
                  <h3>Exam Time</h3>
                  <p>1 Hour</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <h3>Subject</h3>
                  <p>English</p>
                </div>
                <div>
                  <h3>Exam Time</h3>
                  <p>1 Hour</p>
                </div>
                <div>
                  <h3>Exam Time</h3>
                  <p>1 Hour</p>
                </div>
              </div>
            </div>
          <section className="student-details col-this">
            {/* <Routes>
              <Route path="/" exact element={<Instructions />} />
              <Route path="/tostartexam" element={<StartExam />} />
            </Routes> */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default result;
