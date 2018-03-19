import React from 'react';
import UserItem from "./UserItem"

const UserList = (props) => {
    const { users } = props;
    return (
        <ul className="collection">
            {
                users.map((user, index) => {
                    return <UserItem key={index} user={user} />
                })
            }
        </ul>
    )
}

export default UserList;