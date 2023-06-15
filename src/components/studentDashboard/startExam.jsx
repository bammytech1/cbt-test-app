

function StartExam() {
  return (
    <>
        <div className="btn-group">
            <button className="btn-pry">TEST</button>
            <button className="btn-sec">TEST</button>
        </div>
        <div className="questions-container">
            <h3>1.Function can be either called by value or reference</h3>
            <input type="radio">Answer 1</input>
            <input type="radio">Answer 2</input>
            <input type="radio">Answer 3</input>
            <input type="radio">Answer 4</input>
            <input type="radio">Answer 5</input>
        </div>
        <div>

        </div>
        <div className="btn-controls">
            <button className="btn-pry">PREV</button>
            <h3> You have answered 18 of 50 </h3>
            <button className="btn-sec">NEXT</button>
        </div>
    </>
  )
}

export default StartExam