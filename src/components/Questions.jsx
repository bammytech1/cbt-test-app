import { useEffect, useState } from 'react';
// import data from './data';
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useDispatch, useSelector } from 'react-redux';

import { updateResult } from '../hooks/getResult';

function Questions( {onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const { trace } =useSelector(state => state.questions);
  const  result  =useSelector(state => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log({ trace, checked});
    dispatch(updateResult({ trace, checked}))
  },[checked]);

  useEffect(() => {
    // console.log(isLoading);
    // console.log(serverError);
    // console.log(apiData);
  }),
  [];
  function onSelect(index) {
    onChecked(index)
    setChecked(index)
    dispatch(updateResult({ trace, checked}))
  }

  if (isLoading) return <h3>isLoading</h3>
  if (isLoading) return <h3>{serverError || "unKnown Error"}</h3>
  return (
    <div className="question-container">
      <h3>
        <span>
          {questions?.id}
          .
          {' '}
        </span>
        {questions?.quest}
      </h3>
      <ul key={questions?.id}>
        {questions?.obj.map((q, index) => (
          <li
            key={index}
            // onClick={() => handleAnswer(q, index)}
            className="selected"
          >
            <input
              type="radio"
              value={false}
              name="obj"
              id={`q${index}-obj`}
              onChange={() => onSelect(index)}
            />
            <label className="text-pry" htmlFor={`q${index}-obj`}>
              {q}
            </label>
            <div  className={`check ${result[trace] == index ? 'checked' : ''}`} ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
