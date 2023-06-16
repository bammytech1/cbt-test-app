

function startExam() {
  return (
    <>
        <div className="btn-group">
            <button className="btn-pry">TEST</button>
            <button className="btn-pry">TEST</button>
        </div>
        
        <div className="question-container">
          <h3>1. Function can be either called by value or reference</h3>
          <form className="answers">
            <label><input type="radio" className=""  />Answer 1</label>
            <label><input type="radio" className=""  />Answer 2</label>
            <label><input type="radio" className=""  />Answer 3</label>
            <label><input type="radio" className=""  />Answer 4</label>
            <label><input type="radio" className=""  />Answer 5</label>  
          </form> 
        </div>
        <div className="btn-controls">
            <button className="btn-pry">PREV</button>
            <h3> You have answered 18 of 50 </h3>
            <button className="btn-sec">NEXT</button>
        </div>
    </>
  )
}

export default startExam