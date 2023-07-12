import questions from "./questions";
import { useState } from "react";

const Examination = () => {
  // const { label, obj, id } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  // const [currentStep, setCurrentStep] = useState(1);
  const handlePrevOption = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion < 0) {
      return currentQuestion === 0;
    }
    setCurrentQuestion(prevQuestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const examQuestion = (
    <h3>
      {questions[currentQuestion].obj.ques}.<span> </span>
      {questions[currentQuestion].label}
    </h3>
  );

  return (
    <>
      <div className="btn-group">
        <button className="btn-pry">TEST</button>
        <button className="btn-pry">EXAM</button>
      </div>

      <div className="question-container">
        {examQuestion}
        <ul className="answers" onSubmit={handleSubmit}>
          <li>
            <input name="option" value="A" type="radio" className="" />
            {questions[currentQuestion].obj.opt1}
          </li>
          <li>
            <input name="option" value="A" type="radio" className="" />
            {questions[currentQuestion].obj.opt2}
          </li>
          <li>
            <input name="option" value="A" type="radio" className="" />
            {questions[currentQuestion].obj.opt3}
          </li>
          <li>
            <input name="option" value="A" type="radio" className="" />
            {questions[currentQuestion].obj.opt4}
          </li>
          {/* <label>
            <input
              name={questions[currentQuestion].obj.opt1}
              value="A"
              type="radio"
              className=""
            />
            {questions[currentQuestion].obj.opt1}
          </label>
          <label>
            <input
              name={questions[currentQuestion].obj.ques}
              value="B"
              type="radio"
              className=""
            />
            {questions[currentQuestion].obj.opt2}
          </label>
          <label>
            <input
              name={questions[currentQuestion].obj.ques}
              value="C"
              type="radio"
              className=""
            />
            {questions[currentQuestion].obj.opt3}
          </label>
          <label>
            <input
              name={questions[currentQuestion].obj.ques}
              value="D"
              type="radio"
              className=""
            />
            {questions[currentQuestion].obj.opt4}
          </label> */}
          {/* <label><input type="radio" className=""  />{questions[currentQuestion].obj.opt5}</label>   */}
        </ul>
      </div>
      <div className="flex-wrap">
        {questions?.map((list, index) => {
          return (
            <button
              className={`step-list ${currentQuestion === index && "active"} ${
                index < currentQuestion && "complete"
              }
              }`}
              type="button"
              list={list}
              key={index}
            >
              {list.id}
            </button>
          );
        })}
      </div>

      <div className="btn-controls">
        <button
          type="button"
          className="btn-pry"
          onClick={() => handlePrevOption()}
        >
          PREV
        </button>
        <h3>
          {" "}
          You have answered {currentQuestion} of {questions.length}{" "}
        </h3>
        <button
          type="submit"
          className="btn-sec"
          onClick={() => handleNextOption()}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default Examination;
