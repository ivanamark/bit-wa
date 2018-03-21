import React from 'react'
import UserCard from './UserCard';

const UserItem = (props)=>{
    const {user} = props
    const gender = user.gender
  
  const changeColor = () => {
    if (gender === "female") {
      return "collection-item avatar red lighten-5"
    } else {
      return "collection-item avatar"
    }
}
    return(
        <li className={changeColor()}>
        <img src={user.photo} alt="" className="circle"/>
        <span className="title">{user.firstName} {user.lastName}</span>
        <p><i className="tiny material-icons ">email</i>{user.email} <br/>
        <i className="tiny material-icons ">cake</i>  {user.birthday}
        </p>
        
      </li>
    )
}
export  default UserItem ;