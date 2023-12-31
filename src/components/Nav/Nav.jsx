
import clockIcon from "../../assets/timer.svg"
import { useEffect, useRef, useState } from "react"

const formatTime = (time) => {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)

  if (minutes <= 10) minutes = '0' + minutes;
  if (seconds <= 10) seconds = '0' + seconds;
  return minutes + ':' + seconds
}

 function CountDown({seconds}) {
  const [countdown, setCountdown] = useState(false)
  const timerId = useRef()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timerId.current)
  },[])

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current)
      alert("END")
    }
  },[countdown])

  return (
    <h3>Count down: {formatTime(countdown)}</h3>
  )
}

function Nav() {
  return (
    <nav>
        <div className="set-right">
            <img src={clockIcon} alt="" />
            <CountDown seconds={95} />
            <button className="btn-pry">SUBMIT</button>
        </div>
    </nav>
  )
}

export default Nav
