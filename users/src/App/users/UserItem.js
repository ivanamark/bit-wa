import React from 'react'
const UserItem = (props)=>{
    const {user} = props
    return(
        <li className="collection-item avatar">
        <img src={user.photo} alt="" className="circle"/>
        <span className="title">{user.firstName}</span>
        <p>{user.email} <br/>
          
        </p>
        
      </li>
    )
}
export  default UserItem ;