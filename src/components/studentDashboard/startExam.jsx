import React from 'react';
// import questions from "../../questions";
// import Examination from "./examination";

/** redux store import */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Questions from '../Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../../hooks/FetchQuestion';
import { PushAnswer, updateResult } from '../../hooks/getResult';
import { Navigate} from 'react-router-dom'


function startExam() {

  const [ check, setChecked] = useState(undefined);
  
  const result = useSelector(state => state.result.result);
  const { queue, trace} = useSelector(state => state.questions);

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(result);
  });

  function onNext() {

    if(trace < queue.length){

      console.log("On next click");  
      /**this update trace value by 1 using MoveNextAction */
      dispatch(MoveNextQuestion())

      if (result.length <= trace){
        dispatch(PushAnswer(check))
      }
    }
  }

  function onPrev() {
    if (trace > 0) 
    {
      
      console.log("On prev click");
      dispatch(MovePrevQuestion())
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check)
  }

  /** finish exam after last question */

  if(result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <section id="tostartexam">
      <Questions onChecked={onChecked} />
      <div className="flex-wrap">
            {queue?.map((list, index) => {
              return (
                <button
                  className={`step-list ${
                    trace === index && "active"
                  } ${index < trace && "complete"}
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
        { trace > 0 ? <button type="button" className="btn-pry" onClick={() => onPrev()}>
          PREV
        </button> : <div></div> }
        
        <h3 >
              {" "}
              You have answered {trace} of {queue.length}{" "}
            </h3>
        <button
          type="button"
          className="btn-sec to-next"
          onClick={() => onNext()}
          // disabled={thickAnswer === null}
        >
          {trace === queue.length - 1 ? "SUBMIT" : "NEXT"}
        </button>
      </div>
    </section>
  );
}

export default startExam;
