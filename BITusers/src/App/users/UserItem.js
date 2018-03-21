import React from 'react'
const UserItem = (props)=>{
    const {user} = props
    return(
        <li className="collection-item avatar">
        <img src={user.photo} alt="" className="circle"/>
        <span className="title">{user.firstName} {user.lastName}</span>
        <p><i className="tiny material-icons ">email</i>{user.email} <br/>
        <i className="tiny material-icons ">cake</i>  {user.birthday}
        </p>
        
      </li>
    )
}
export  default UserItem ;