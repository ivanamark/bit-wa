import React from 'react'
import { hideEmail } from "../../shared/utils"
const UserCard = (props) => {
  const { user } = props
  const gender = user.gender
  
  const changeColor = () => {
    if (gender === "female") {
      return "card red lighten-5"
    } else {
      return "card"
    }
  }

  return (
    <div className="col m4">
      <div className={changeColor()}>
        <div className="card-image">
          <img src={user.photo} />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>{`name: ${user.firstName} ${user.lastName}`}</p>
          <p>{`email:${hideEmail(user.email)}`}</p>
          <p>{`date of birth:${user.birthday}`}</p>
        </div>
      </div>
    </div>
  )
}
export default UserCard;