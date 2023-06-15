
import logo from "../../assets/aaua-logo.svg"
import background from "../../assets/bkground.svg"
import "./Login.scss"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Login() {

  const initialValues = {studentId: "", password: ""}
  const [inputs, setInputs] = useState(initialValues);
  const [inputsError, setInputsError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

function submit(e) {
  e.preventDefault()
  validateForm(inputs)
  setInputs({studentId: "", password: ""})
  setInputsError(validateForm(inputs));
  setIsSubmit(true)
  // alert(inputs)
}


function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  setInputs({...inputs, [name]: value})
}

  useEffect(() => {
  if (Object.keys(inputsError).length === 0 && isSubmit) {
      console.log(inputs)
  }
  }, [inputsError])

  const validateForm = (values) => {
      const errors = {}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!values.studentId) {
          errors.studentId = "Student-ID is Required";
      } else if (!regex.test(values.studentId)) {
              errors.studentId = "This is not a valid Student ID";
          }
          // return errors;
      
      if (!values.password) {
        errors.password = "Password is Required";

      }
      return errors;
    }

  return (
    <div className="login">
        <img src={background} alt=""/>
        <div className="login-input">
            <div className="row-this">
                <img className="logo" src={logo} alt="" />
                <h3>e-Learn CBT</h3>
            </div>
            {Object.keys(inputsError).length === 0 && isSubmit ? (<div className="success">Message sent Successfully</div>) : null 
             }
            <form className="form" method="post" onSubmit={submit}>
                <h3>LOGIN</h3>
                <input type="text" className="inputs" onChange={handleChange} name="studentId" value={inputs.studentId} placeholder="StudentID" />
                <p className="input-error">{inputsError.studentId}</p>
                <input type="password" className="inputs" onChange={handleChange} name="password" value={inputs.password} placeholder="Password" />
                <p className="input-error">{inputsError.password}</p>
                <Link to="/studentDash" className="btn-sec" type="submit" >Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Login



{/* <div className="row">
                        <div>
                            <h3>Department</h3>
                            <p>Sciences</p>
                        </div>
                        <div>
                            <h3>Exam no.</h3>
                            <p>121345522</p>
                        </div>
                        <div>
                            <h3>Total Number of Question</h3>
                            <p>50</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h3>Student ID</h3>
                            <p>1241477519</p>
                        </div>
                        <div>
                            <h3>Subject</h3>
                            <p>English</p>
                        </div>
                        <div>
                            <h3>Exam Time</h3>
                            <p>30 Min</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h3>Level</h3>
                            <p>300L</p>
                        </div>
                        <div>
                            <h3>Exam Time</h3>
                            <p>Sciences</p>
                        </div>
                        <div>
                            <h3>Exam Status</h3>
                            <p>Undone</p>
                        </div>
                    </div> */}