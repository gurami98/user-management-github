import React from 'react'
import './UsersList.css'
import SingleUser from "./SingleUser/User";

const UsersList = ({users, hasRemoveBtn}) => {
    return (
        <div className="users">
            {
                users.map(user => {
                    return (
                        <SingleUser key={user.id} user={user} hasRemoveBtn={hasRemoveBtn}/>
                    )
                })
            }
        </div>
    )
}

export default UsersList;
