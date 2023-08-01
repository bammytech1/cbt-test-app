import questions from "../../questions";
import { resultInitalState } from "../../questions";
import { useState } from "react";

const Examination = () => {
  // const { label, obj, id } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [thickAnswer, setTickAnswer] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  const { quest, obj, ans } = questions[currentQuestion];

  const handleAnswer = (answer, index) => {
    setTickAnswer(index);

    if (answer === ans) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const handleNextOption = () => {
    // const nextQuestion = currentQuestion + 1;
    // setCurrentQuestion(nextQuestion);
    setTickAnswer(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 2,
            correctAnswers: prev.correctAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswer + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  // const [currentStep, setCurrentStep] = useState(1);
  const handlePrevOption = (answer, index) => {
    setTickAnswer(index);
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion < 0) {
      return currentQuestion === 0;
    }
    setCurrentQuestion(prevQuestion);
  };

  const [checked, setChecked] = useState({});

  function onSelect(answer, index) {
    let temp = [...checked];
    temp[index + 1] = answer.target.value;
    setChecked(temp);
    // setChecked(true);
  }

  return (
    <section>
      {!showResult ? (
        <>
          <div className="btn-group">
            <button className="btn-pry">TEST</button>
            <button className="btn-pry">EXAM</button>
          </div>

          <div className="question-container">
            <h3>
              <span>{questions[currentQuestion].id}. </span>
              {quest}
            </h3>
            {/* <ul className="answers">
              {obj.map((answer, index) => (
                <li
                  onClick={() => handleAnswer(answer, index)}
                  key={answer}
                  className={thickAnswer === index ? "selected" : null}
                >
                  <span
                    onClick={() => handleAnswer(answer, index)}
                    key={answer}
                    className={thickAnswer === index ? "selected" : null}
                  ></span>
                  {answer}
                </li>
              ))}
            </ul> */}
            <ul key={questions.id}>
              {obj.map((q, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(q, index)}
                  className={thickAnswer === index ? "selected" : null}
                >
                  <input
                    // className="check checked"
                    type="radio"
                    value={true}
                    name="obj"
                    id={`q${index}-obj`}
                    onChange={() => onSelect()}
                  />
                  <label className="text-pry" htmlFor={`q${index}-obj`}>
                    {q}
                  </label>
                  <div className="check "></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-wrap">
            {questions?.map((list, index) => {
              return (
                <button
                  className={`step-list ${
                    currentQuestion === index && "active"
                  } ${index < currentQuestion && "complete"}
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
              type="button"
              className="btn-sec to-next"
              onClick={() => handleNextOption()}
              // disabled={thickAnswer === null}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="results">
          <h3>{questions.length}</h3>
          <h3>{result.score}</h3>
          <h3>{result.correctAnswer}</h3>
          <h3>{result.wrongAnswer}</h3>
        </div>
      )}
    </section>
  );
};

export default Examination;
