import React from 'react'
import './UsersList.css'
import User from "./User/User";

const UsersList = ({users}) => {
    return (
        <div className="users">
            {
                users.map(user => {
                    return (
                        <User key={user.id} user={user}/>
                    )
                })
            }
        </div>
    )
}

export default UsersList;
