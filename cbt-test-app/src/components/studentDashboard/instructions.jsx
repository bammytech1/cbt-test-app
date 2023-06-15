import { Link } from "react-router-dom"

function Instructions() {
  return (
    <>
                <ul>
                    <Link to="/" className="btn-pry">English</Link>
                    <Link to="/" className="btn-pry">Mathematics</Link>
                    <Link to="/" className="btn-pry">Chemistry</Link>
                    <Link to="/" className="btn-pry">Physics</Link>
                </ul>
                <div className="student-contents">
                    <ul className="instructions">
                        <h3>Instruction</h3>
                        <li className="list">Do not try to logout until you finish your examination</li>
                        <li className="list">You can ONLY click on FINISH BUTTON if you have finish</li>
                        <li className="list">You will be automatically logged out when your time elapsed</li>
                        <li className="list">Do not waste your time as time is against you... Best of luck!!!</li>
                        <li className="list">Do not waste your time as time is against you... Best of luck!!!n</li>

                    </ul>
                </div>
                <button className="btn-pry"><Link to="/instruction">START EXAM</Link></button>
    </>
  )
}

export default Instructions