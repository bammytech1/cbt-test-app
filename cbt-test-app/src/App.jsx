
import './style.scss'
import { Routes, Route} from "react-router-dom"
import Login from './components/Login/Login'
import StudentDashboard from './components/studentDashboard/StudentDashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/studentDash" element={ <StudentDashboard />} />
    </Routes>
  )
}

export default App
