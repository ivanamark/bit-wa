import React from 'react';
import UserItem from "./UserItem"
import UserCard from "./UserCard"

const UserList = (props) => {
    const { users, isListView } = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="collection">
                    {
                        users.map((user, index) => {

                            if (isListView) {
                                return <UserItem key={index} user={user} />
                            } else {
                                return <UserCard key={index} user={user} />
                            }

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserList;