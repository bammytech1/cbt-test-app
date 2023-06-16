
import clockIcon from "../../assets/timer.svg"

function Nav() {
  return (
    <nav>
        <div className="set-right">
            <img src={clockIcon} alt="" />
            <button className="btn-pry">SUBMIT</button>
        </div>
    </nav>
  )
}

export default Nav