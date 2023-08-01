import { Link } from "react-router-dom";
// import { useState } from "react";
// import Instructions from "./instructions";
// import StartExam from "./startExam";
// import { Redirect } from "react-router-dom"

function Instructions() {
  return (
    <>
      <ul id="instructions">
        <Link to="/" className="btn-pry">
          English
        </Link>
        <Link to="/" className="btn-pry">
          Mathematics
        </Link>
        <Link to="/" className="btn-pry">
          Chemistry
        </Link>
        <Link to="/" className="btn-pry">
          Physics
        </Link>
      </ul>
      <div className="student-contents">
        <ul className="instructions">
          <h3>Instruction</h3>
          <li className="list">
            Do not try to logout until you finish your examination
          </li>
          <li className="list">
            You can ONLY click on FINISH BUTTON if you have finish
          </li>
          <li className="list">
            You will be automatically logged out when your time elapsed
          </li>
          <li className="list">
            Do not waste your time as time is against you... Best of luck!!!
          </li>
          <li className="list">
            Do not waste your time as time is against you... Best of luck!!!n
          </li>
        </ul>
      </div>
      <section className="student-details col-this">
        {/* {examStart && <StartExam id="startexam" />} */}
        <Link to="tostartexam" className="btn-pry">
          START EXAM
        </Link>
      </section>
    </>
  );
}

export default Instructions;
