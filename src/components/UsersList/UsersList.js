import React from 'react'
import './UsersList.css'
const UsersList = ({users}) => {
    return (
        <div className="users">
            {
                users.map(user => {
                    return (
                        <div className='user' key={user.id}>
                            <img src={user.avatar_url} alt="avatar"/>
                            <p>{user.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersList;
