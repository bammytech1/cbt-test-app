import questions from "../../questions"
import Examination from "../../examination"

function startExam() {
  return (
      <div>
        {/* {questions.map(exam => {
          return (
            <Examination {...exam} key={exam.id} />
          )})
        }  */}
        <Examination {...questions}/>
        
      </div>


 ) 
}







export default startExam