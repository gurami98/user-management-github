import React from 'react'
import './UsersList.css'
import SingleUser from "./SingleUser/User";

const UsersList = ({users}) => {
    return (
        <div className="users">
            {
                users.map(user => {
                    return (
                        <SingleUser key={user.id} user={user}/>
                    )
                })
            }
        </div>
    )
}

export default UsersList;
